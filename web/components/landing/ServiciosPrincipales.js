import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"
import CtaButton from "./CtaButton"
import { ClipboardList, GraduationCap, FileStack } from "lucide-react"

const ICONS = [ClipboardList, GraduationCap, FileStack]

export default function ServiciosPrincipales() {
  const { id, title, subtitle, items } = config.landing.servicios

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <SectionHeader title={title} subtitle={subtitle} align="center" />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i] || ClipboardList
            return (
              <FadeIn key={item.title} delay={i * 100} className="sgmas-card flex flex-col border-t-4 border-t-[var(--sgmas-green)]">
                <span className="text-2xl font-extrabold text-[var(--sgmas-green)]">{item.number}</span>
                <Icon className="mt-4 size-7 text-[var(--sgmas-blue)]" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-bold uppercase text-[var(--sgmas-blue)]">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--sgmas-gray)]">{item.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--sgmas-gray)]">{item.description}</p>
                <div className="mt-6">
                  <CtaButton label={item.cta.label} href={item.cta.href} variant="secondary" className="w-full text-xs" />
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
