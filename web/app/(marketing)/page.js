import Hero from "@/components/landing/Hero"
import ValueProp from "@/components/landing/ValueProp"
import Consultoria from "@/components/landing/Consultoria"
import DiagnosticoFlow from "@/components/landing/DiagnosticoFlow"
import Auditorias from "@/components/landing/Auditorias"
import Capacitacion from "@/components/landing/Capacitacion"
import Tramites from "@/components/landing/Tramites"
import Metodologia from "@/components/landing/Metodologia"
import Diferenciador from "@/components/landing/Diferenciador"
import ParaQuien from "@/components/landing/ParaQuien"
import Nosotros from "@/components/landing/Nosotros"
import FinalCta from "@/components/landing/FinalCta"
import ContactForm from "@/components/landing/ContactForm"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Consultoria />
      <DiagnosticoFlow />
      <Auditorias />
      <Capacitacion />
      <Tramites />
      <Metodologia />
      <Diferenciador />
      <ParaQuien />
      <Nosotros />
      <FinalCta />
      <ContactForm />
    </>
  )
}
