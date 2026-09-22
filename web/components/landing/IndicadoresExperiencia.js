import config from "@/config"
import FadeIn from "./FadeIn"

export default function IndicadoresExperiencia() {
  const { items } = config.landing.indicadores

  return (
    <section className="border-y border-[var(--sgmas-bg-gray)] bg-[var(--sgmas-blue)] py-12 md:py-14">
      <div className="sgmas-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.line1} delay={i * 60} className="text-center">
              <p className="text-lg font-extrabold uppercase tracking-wide text-white md:text-xl">{item.line1}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sgmas-green-light)]">
                {item.line2}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
