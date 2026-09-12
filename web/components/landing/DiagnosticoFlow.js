import config from "@/config"
import FadeIn from "./FadeIn"
import { ChevronDown } from "lucide-react"

export default function DiagnosticoFlow() {
  const { title, text, steps, footer } = config.landing.diagnosticoFlow

  return (
    <section className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <FadeIn className="max-w-3xl">
          <h2 className="text-2xl font-bold uppercase text-[var(--sgmas-blue)] md:text-3xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-[var(--sgmas-gray)]">{text}</p>
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-0">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col items-center md:flex-row">
                <div className="rounded-lg border-2 border-[var(--sgmas-blue)] bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-wide text-[var(--sgmas-blue)] md:text-sm">
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <ChevronDown className="my-1 size-5 rotate-0 text-[var(--sgmas-green)] md:mx-2 md:rotate-[-90deg]" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-10 max-w-3xl">
          <p className="leading-relaxed text-[var(--sgmas-gray)]">{footer}</p>
        </FadeIn>
      </div>
    </section>
  )
}
