import config from "@/config"
import SectionHeader from "./SectionHeader"

export default function Consultoria() {
  const { id, eyebrow, title, text } = config.landing.consultoria

  return (
    <section id={id} className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />
      </div>
    </section>
  )
}
