"use client"

import { useEffect, useState } from "react"
import config from "@/config"
import FadeIn from "./FadeIn"

const EMPTY = {
  nombre: "",
  empresa: "",
  cargo: "",
  email: "",
  telefono: "",
  ciudad: "",
  servicio: "",
  mensaje: "",
}

export default function ContactForm() {
  const { id, title, successMessage, buttonLabel, services } = config.landing.contacto
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  useEffect(() => {
    function onContact(e) {
      const { service, message } = e.detail || {}
      setForm((prev) => ({
        ...prev,
        servicio: service || prev.servicio,
        mensaje: message || prev.mensaje,
      }))
    }
    window.addEventListener("sgmas:contact", onContact)
    return () => window.removeEventListener("sgmas:contact", onContact)
  }, [])

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "No pudimos enviar tu solicitud.")
      }
      setStatus("success")
      setForm(EMPTY)
    } catch (err) {
      setError(err.message)
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-md border border-[var(--sgmas-bg-gray)] bg-white px-4 py-3 text-sm text-[var(--sgmas-gray)] outline-none transition focus:border-[var(--sgmas-blue)]"

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <FadeIn className="max-w-3xl">
          <h2 className="text-2xl font-bold uppercase text-[var(--sgmas-blue)] md:text-3xl">{title}</h2>
        </FadeIn>

        {status === "success" ? (
          <FadeIn className="mt-10 max-w-2xl rounded-lg border border-[var(--sgmas-green)] bg-[var(--sgmas-bg-light)] p-8">
            <p className="text-[var(--sgmas-blue)]">{successMessage}</p>
          </FadeIn>
        ) : (
          <FadeIn className="mt-10">
            <form onSubmit={onSubmit} className="grid max-w-3xl gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Nombre
                </label>
                <input id="nombre" required value={form.nombre} onChange={update("nombre")} className={inputClass} />
              </div>
              <div>
                <label htmlFor="empresa" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Empresa
                </label>
                <input id="empresa" required value={form.empresa} onChange={update("empresa")} className={inputClass} />
              </div>
              <div>
                <label htmlFor="cargo" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Cargo
                </label>
                <input id="cargo" value={form.cargo} onChange={update("cargo")} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Correo electrónico
                </label>
                <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputClass} />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Teléfono
                </label>
                <input id="telefono" type="tel" value={form.telefono} onChange={update("telefono")} className={inputClass} />
              </div>
              <div>
                <label htmlFor="ciudad" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Ciudad
                </label>
                <input id="ciudad" value={form.ciudad} onChange={update("ciudad")} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="servicio" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Servicio de interés
                </label>
                <select id="servicio" required value={form.servicio} onChange={update("servicio")} className={inputClass}>
                  <option value="">Selecciona un servicio</option>
                  {services.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="mensaje" className="mb-1 block text-xs font-semibold uppercase text-[var(--sgmas-blue)]">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={update("mensaje")}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-sgmas-cta" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando…" : buttonLabel}
                </button>
              </div>
            </form>
          </FadeIn>
        )}

        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-error">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
