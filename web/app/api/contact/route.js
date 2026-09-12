import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const SERVICE_LABELS = {
  diagnostico: "Diagnóstico 360°",
  consultoria: "Consultoría",
  auditoria: "Auditoría",
  capacitacion: "Capacitación",
  tramites: "Gestión de trámites",
  otro: "Otro",
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      nombre,
      empresa,
      cargo = "",
      email,
      telefono = "",
      ciudad = "",
      servicio,
      mensaje = "",
    } = body

    if (!nombre?.trim() || !empresa?.trim() || !email?.trim() || !servicio) {
      return NextResponse.json({ error: "Completa los campos obligatorios." }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Correo electrónico inválido." }, { status: 400 })
    }

    if (!SERVICE_LABELS[servicio]) {
      return NextResponse.json({ error: "Servicio no válido." }, { status: 400 })
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: "El formulario no está disponible en este momento." },
        { status: 503 }
      )
    }

    const supabase = await createClient()

    const { error } = await supabase.from("contact_leads").insert({
      nombre: nombre.trim(),
      empresa: empresa.trim(),
      cargo: cargo.trim() || null,
      email: email.toLowerCase().trim(),
      telefono: telefono.trim() || null,
      ciudad: ciudad.trim() || null,
      servicio,
      mensaje: mensaje.trim() || null,
      source: "landing",
    })

    if (error) {
      console.error("[contact] insert error:", error.message)
      return NextResponse.json({ error: "No pudimos enviar tu solicitud." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact] error:", err)
    return NextResponse.json({ error: "Error procesando la solicitud." }, { status: 500 })
  }
}
