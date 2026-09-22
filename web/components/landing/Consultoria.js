import config from "@/config"
import SectionHeader from "./SectionHeader"

import FadeIn from "./FadeIn"

export default function Consultoria() {
  const { id, sectionTitle, title, text } = config.landing.consultoria

  return (
    <section id={id} className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader title={sectionTitle} />
        <FadeIn className="mt-6 max-w-3xl">
          <h3 className="text-lg font-bold uppercase text-[var(--sgmas-blue)] md:text-xl">{title}</h3>
          <p className="mt-4 leading-relaxed text-[var(--sgmas-gray)]">{text}</p>
        </FadeIn>
      </div>
    </section>
  )
}
