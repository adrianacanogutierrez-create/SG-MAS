import config from "@/config"
import FadeIn from "./FadeIn"
import { Factory, Building, TrendingUp, ClipboardList } from "lucide-react"

const ICONS = [Factory, Building, TrendingUp, ClipboardList]

export default function ParaQuien() {
  const { title, items } = config.landing.paraQuien

  return (
    <section className="sgmas-section bg-white">
      <div className="sgmas-container">
        <FadeIn className="max-w-3xl">
          <h2 className="text-2xl font-bold uppercase text-[var(--sgmas-blue)] md:text-3xl">{title}</h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = ICONS[i] || Factory
            return (
              <FadeIn key={item.title} delay={i * 100} className="sgmas-card">
                <Icon className="size-7 text-[var(--sgmas-green)]" />
                <h3 className="mt-4 font-bold uppercase text-[var(--sgmas-blue)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--sgmas-gray)]">{item.body}</p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
