import config from "@/config"
import SectionHeader from "./SectionHeader"

export default function ExperienciaSgmas() {
  const { id, title, text } = config.landing.experiencia

  return (
    <section id={id} className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader title={title} text={text} align="center" />
      </div>
    </section>
  )
}
