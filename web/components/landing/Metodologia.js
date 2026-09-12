import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"

export default function Metodologia() {
  const { eyebrow, title, steps } = config.landing.metodologia

  return (
    <section className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} align="center" />

        <div className="mt-14 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-[var(--sgmas-green)]" aria-hidden />
            <div className="relative grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 100} className="text-center">
                  <div className="relative mx-auto flex size-16 items-center justify-center rounded-full border-4 border-[var(--sgmas-green)] bg-white">
                    <span className="text-lg font-extrabold text-[var(--sgmas-blue)]">{step.number}</span>
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase text-[var(--sgmas-blue)]">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--sgmas-gray)]">{step.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-6 md:hidden">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 80} className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--sgmas-green)] bg-white text-sm font-extrabold text-[var(--sgmas-blue)]">
                {step.number}
              </div>
              <div>
                <h3 className="font-bold uppercase text-[var(--sgmas-blue)]">{step.title}</h3>
                <p className="mt-1 text-sm text-[var(--sgmas-gray)]">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
