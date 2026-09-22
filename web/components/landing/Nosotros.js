import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"

export default function Nosotros() {
  const { id, sectionTitle, text, text2, profile } = config.landing.nosotros

  return (
    <section id={id} className="sgmas-section bg-white">
      <div className="sgmas-container">
        <SectionHeader title={sectionTitle} text={text} />
        {text2 && (
          <FadeIn className="mt-4 max-w-3xl">
            <p className="leading-relaxed text-[var(--sgmas-gray)]">{text2}</p>
          </FadeIn>
        )}

        {profile && (
          <FadeIn className="mt-10 max-w-xl rounded-lg border border-[var(--sgmas-bg-gray)] bg-[var(--sgmas-bg-light)] p-6 md:p-8">
            <p className="text-base font-bold text-[var(--sgmas-blue)]">{profile.name}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--sgmas-gray)]">
              {profile.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
