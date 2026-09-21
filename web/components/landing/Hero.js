import Image from "next/image"
import config from "@/config"
import CtaButton from "./CtaButton"
import FadeIn from "./FadeIn"

export default function Hero() {
  const { titleLine1, titleLine2, subtitle, supportText, cta, ctaSecondary, image } = config.landing.hero

  return (
    <section id="inicio" className="relative min-h-[85vh] overflow-hidden">
      <Image
        src={image}
        alt="Profesionales EHS evaluando condiciones de seguridad en planta industrial"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--sgmas-blue)]/75" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sgmas-blue)]/90 via-[var(--sgmas-blue)]/70 to-[var(--sgmas-blue)]/50" aria-hidden />

      <div className="relative z-10 flex min-h-[85vh] items-center">
        <div className="sgmas-container py-24 md:py-32">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sgmas-green-light)]">
              {config.landing.descriptor}
            </p>
            <h1 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {titleLine1}
              <br />
              {titleLine2}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">{subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton label={cta.label} service={cta.service} />
              <CtaButton label={ctaSecondary.label} href={ctaSecondary.href} variant="outline" />
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-white/70">{supportText}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
