import Hero from "@/components/landing/Hero"
import ServiciosPrincipales from "@/components/landing/ServiciosPrincipales"
import Consultoria from "@/components/landing/Consultoria"
import Diagnostico360 from "@/components/landing/Diagnostico360"
import Auditorias from "@/components/landing/Auditorias"
import Metodologia from "@/components/landing/Metodologia"
import Capacitacion from "@/components/landing/Capacitacion"
import Tramites from "@/components/landing/Tramites"
import MomentosCliente from "@/components/landing/MomentosCliente"
import Nosotros from "@/components/landing/Nosotros"
import FinalCta from "@/components/landing/FinalCta"
import ContactForm from "@/components/landing/ContactForm"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiciosPrincipales />
      <Consultoria />
      <Diagnostico360 />
      <Auditorias />
      <Metodologia />
      <Capacitacion />
      <Tramites />
      <MomentosCliente />
      <Nosotros />
      <FinalCta />
      <ContactForm />
    </>
  )
}
