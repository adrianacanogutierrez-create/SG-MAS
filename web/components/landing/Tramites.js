import config from "@/config"
import SectionHeader from "./SectionHeader"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"
import { Building2, MapPin, Landmark } from "lucide-react"

const LEVEL_ICONS = [Landmark, Building2, MapPin]

export default function Tramites() {
  const { id, eyebrow, title, text, levels, gestionesTitle, gestiones, note, cta } =
    config.landing.tramites

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {levels.map((level, i) => {
            const Icon = LEVEL_ICONS[i] || Landmark
            return (
              <FadeIn key={level.title} delay={i * 100} className="sgmas-card">
                <Icon className="size-7 text-[var(--sgmas-blue)]" />
                <h3 className="mt-4 text-base font-bold uppercase text-[var(--sgmas-blue)]">{level.title}</h3>
                <ul className="mt-4 space-y-2">
                  {level.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-[var(--sgmas-gray)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn className="mt-16">
          <h3 className="text-lg font-bold uppercase text-[var(--sgmas-blue)]">{gestionesTitle}</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gestiones.map((g) => (
              <div
                key={g}
                className="rounded-md border border-[var(--sgmas-bg-gray)] bg-[var(--sgmas-bg-light)] px-4 py-3 text-sm font-medium text-[var(--sgmas-gray)]"
              >
                {g}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm italic text-[var(--sgmas-gray)]">{note}</p>
        </FadeIn>

        <div className="mt-10">
          <CtaButton label={cta.label} service={cta.service} />
        </div>
      </div>
    </section>
  )
}
