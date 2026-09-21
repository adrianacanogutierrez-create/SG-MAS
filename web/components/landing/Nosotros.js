import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"
import { Leaf, HardHat, Scale, GraduationCap } from "lucide-react"

const PILLAR_ICONS = [Leaf, HardHat, Scale, GraduationCap]

export default function Nosotros() {
  const { id, eyebrow, title, text, text2, pillars } = config.landing.nosotros

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />
        {text2 && (
          <FadeIn className="mt-4 max-w-3xl">
            <p className="leading-relaxed text-[var(--sgmas-gray)]">{text2}</p>
          </FadeIn>
        )}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] || Leaf
            return (
              <FadeIn key={pillar} delay={i * 80} className="sgmas-card text-center">
                <Icon className="mx-auto size-8 text-[var(--sgmas-green)]" />
                <p className="mt-4 text-sm font-bold uppercase text-[var(--sgmas-blue)]">{pillar}</p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
