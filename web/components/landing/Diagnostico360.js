import config from "@/config"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"

export default function Diagnostico360() {
  const { id, title, titleLine2, text, elementsTitle, elements, cta } = config.landing.diagnostico360

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <div className="rounded-xl border border-[var(--sgmas-bg-gray)] bg-[var(--sgmas-bg-light)] p-8 md:p-12">
          <FadeIn>
            <h2 className="text-2xl font-bold uppercase text-[var(--sgmas-blue)] md:text-3xl">{title}</h2>
            <p className="mt-1 text-lg font-bold uppercase text-[var(--sgmas-blue)]/80">{titleLine2}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--sgmas-gray)]">{text}</p>
          </FadeIn>

          <FadeIn className="mt-10">
            <h3 className="text-base font-bold uppercase text-[var(--sgmas-blue)]">{elementsTitle}</h3>
          </FadeIn>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {elements.map((el, i) => (
              <FadeIn key={el.title} delay={i * 60} className="sgmas-card bg-white">
                <span className="text-lg font-extrabold text-[var(--sgmas-green)]">{el.number}</span>
                <h4 className="mt-2 text-sm font-bold uppercase text-[var(--sgmas-blue)]">{el.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sgmas-gray)]">{el.body}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10">
            <CtaButton label={cta.label} service={cta.service} />
          </div>
        </div>
      </div>
    </section>
  )
}
