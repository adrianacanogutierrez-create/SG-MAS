import config from "@/config"
import SectionHeader from "./SectionHeader"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"
import { GraduationCap } from "lucide-react"

export default function Capacitacion() {
  const { id, eyebrow, title, text, subtitle, categories, note, cta } = config.landing.capacitacion

  return (
    <section id={id} className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />

        <FadeIn className="mt-10">
          <h3 className="text-lg font-bold uppercase text-[var(--sgmas-blue)]">{subtitle}</h3>
        </FadeIn>

        {categories.map((cat, ci) => (
          <div key={cat.name} className="mt-12">
            <FadeIn>
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--sgmas-green)]">
                Categoría 0{ci + 1} · {cat.name}
              </p>
            </FadeIn>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cat.courses.map((course, i) => (
                <FadeIn key={course.name} delay={i * 80} className="sgmas-card flex flex-col">
                  <GraduationCap className="size-6 text-[var(--sgmas-green)]" />
                  <h4 className="mt-4 font-bold text-[var(--sgmas-blue)]">{course.name}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--sgmas-gray)]">
                    {course.description}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[var(--sgmas-gray)]">
                    {course.modality}
                  </p>
                  <div className="mt-5">
                    <CtaButton
                      label="Solicitar información"
                      service="capacitacion"
                      message={`Me interesa el curso: ${course.name}`}
                      className="w-full text-xs"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}

        <FadeIn className="mt-10 max-w-3xl">
          <p className="text-sm italic text-[var(--sgmas-gray)]">{note}</p>
        </FadeIn>

        <div className="mt-10">
          <CtaButton label={cta.label} service={cta.service} />
        </div>
      </div>
    </section>
  )
}
