import config from "@/config"
import FadeIn from "./FadeIn"
import { Rocket, Factory, ListChecks, Search } from "lucide-react"

const ICONS = [Rocket, Factory, ListChecks, Search]

export default function MomentosCliente() {
  const { id, title, items } = config.landing.momentos

  return (
    <section id={id} className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <FadeIn className="max-w-3xl">
          <h2 className="text-2xl font-bold uppercase text-[var(--sgmas-blue)] md:text-3xl">{title}</h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = ICONS[i] || Factory
            return (
              <FadeIn key={item.title} delay={i * 80} className="sgmas-card">
                <Icon className="size-6 text-[var(--sgmas-green)]" />
                <h3 className="mt-4 text-sm font-bold text-[var(--sgmas-blue)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sgmas-gray)]">{item.body}</p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
