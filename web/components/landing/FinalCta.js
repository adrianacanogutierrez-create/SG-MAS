import Image from "next/image"
import config from "@/config"
import CtaButton from "./CtaButton"
import WhatsappButton from "./WhatsappButton"
import FadeIn from "./FadeIn"

export default function FinalCta() {
  const { title, text, ctaWhatsapp, ctaForm, image } = config.landing.finalCta

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src={image}
        alt="Instalaciones industriales"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--sgmas-blue)]/85" aria-hidden />

      <div className="relative z-10 sgmas-container text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold uppercase leading-tight text-white md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/90">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsappButton label={ctaWhatsapp.label} message={config.landing.whatsapp.defaultMessage} />
            <CtaButton label={ctaForm.label} service={ctaForm.service} variant="outline" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
