import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"

export default function QueRecibes() {
  const { title, items } = config.landing.queRecibes

  return (
    <section className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader title={title} align="center" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 70} className="sgmas-card bg-white">
              <span className="text-lg font-extrabold text-[var(--sgmas-green)]">{item.number}</span>
              <h3 className="mt-3 text-sm font-bold uppercase text-[var(--sgmas-blue)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sgmas-gray)]">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
