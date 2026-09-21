import config from "@/config"
import SectionHeader from "./SectionHeader"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"
import { Shield, Leaf, FileText, Search } from "lucide-react"

const ICONS = [Shield, Leaf, FileText, Search]

export default function Auditorias() {
  const { eyebrow, title, subtitle, items, cta } = config.landing.auditorias

  return (
    <section className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = ICONS[i] || Shield
            return (
              <FadeIn key={item.title} delay={i * 80} className="sgmas-card border-l-4 border-l-[var(--sgmas-green)]">
                <Icon className="size-6 text-[var(--sgmas-blue)]" strokeWidth={1.75} />
                <h3 className="mt-3 text-sm font-bold uppercase text-[var(--sgmas-blue)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sgmas-gray)]">{item.body}</p>
              </FadeIn>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <CtaButton label={cta.label} service={cta.service} />
        </div>
      </div>
    </section>
  )
}
