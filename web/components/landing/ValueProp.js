import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"

export default function ValueProp() {
  const { eyebrow, title, text, items } = config.landing.valueProp

  return (
    <section className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} align="center" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100} className="sgmas-card">
              <span className="text-3xl font-extrabold text-[var(--sgmas-green)]">{item.number}</span>
              <h3 className="mt-4 text-lg font-bold uppercase text-[var(--sgmas-blue)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--sgmas-gray)]">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
