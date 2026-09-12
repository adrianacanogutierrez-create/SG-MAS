import config from "@/config"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"

export default function Diferenciador() {
  const { title, text, quote, cta } = config.landing.diferenciador

  return (
    <section className="sgmas-section bg-[var(--sgmas-blue)]">
      <div className="sgmas-container text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold uppercase leading-tight text-white md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-white/85">{text}</p>
          <blockquote className="mx-auto mt-10 max-w-2xl border-l-4 border-[var(--sgmas-green)] pl-6 text-left text-lg font-medium italic text-white md:text-xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="mt-10">
            <CtaButton label={cta.label} service={cta.service} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
