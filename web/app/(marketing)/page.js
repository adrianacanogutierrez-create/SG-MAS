import Hero from "@/components/landing/Hero"
import ServiciosPrincipales from "@/components/landing/ServiciosPrincipales"
import Consultoria from "@/components/landing/Consultoria"
import Diagnostico360 from "@/components/landing/Diagnostico360"
import QueRecibes from "@/components/landing/QueRecibes"
import Auditorias from "@/components/landing/Auditorias"
import PorQueSgmas from "@/components/landing/PorQueSgmas"
import IndicadoresExperiencia from "@/components/landing/IndicadoresExperiencia"
import Metodologia from "@/components/landing/Metodologia"
import Capacitacion from "@/components/landing/Capacitacion"
import Tramites from "@/components/landing/Tramites"
import MomentosCliente from "@/components/landing/MomentosCliente"
import Nosotros from "@/components/landing/Nosotros"
import ExperienciaSgmas from "@/components/landing/ExperienciaSgmas"
import FinalCta from "@/components/landing/FinalCta"
import ContactForm from "@/components/landing/ContactForm"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiciosPrincipales />
      <Consultoria />
      <Diagnostico360 />
      <QueRecibes />
      <Auditorias />
      <PorQueSgmas />
      <IndicadoresExperiencia />
      <Metodologia />
      <Capacitacion />
      <Tramites />
      <MomentosCliente />
      <Nosotros />
      <ExperienciaSgmas />
      <FinalCta />
      <ContactForm />
    </>
  )
}
