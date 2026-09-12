import config from "@/config"
import SectionHeader from "./SectionHeader"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"
import {
  FileSearch,
  HardHat,
  Leaf,
  ClipboardCheck,
  LayoutGrid,
  ListChecks,
} from "lucide-react"

const ICONS = [FileSearch, HardHat, Leaf, ClipboardCheck, LayoutGrid, ListChecks]

export default function Consultoria() {
  const { id, eyebrow, title, subtitle, text, diagnostico } = config.landing.consultoria

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} text={text} />

        <div className="mt-16 rounded-xl border border-[var(--sgmas-bg-gray)] bg-[var(--sgmas-bg-light)] p-8 md:p-12">
          <FadeIn>
            <h3 className="text-xl font-bold uppercase text-[var(--sgmas-blue)] md:text-2xl">
              {diagnostico.title}
            </h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--sgmas-gray)]">
              {diagnostico.text}
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {diagnostico.elements.map((el, i) => {
              const Icon = ICONS[i] || FileSearch
              return (
                <FadeIn key={el.title} delay={i * 80} className="sgmas-card">
                  <Icon className="size-6 text-[var(--sgmas-green)]" strokeWidth={1.75} />
                  <h4 className="mt-4 text-sm font-bold uppercase text-[var(--sgmas-blue)]">{el.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--sgmas-gray)]">{el.body}</p>
                </FadeIn>
              )
            })}
          </div>

          <div className="mt-10">
            <CtaButton label={diagnostico.cta.label} service={diagnostico.cta.service} />
          </div>
        </div>
      </div>
    </section>
  )
}
