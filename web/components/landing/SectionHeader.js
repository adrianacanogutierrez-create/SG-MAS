import FadeIn from "./FadeIn"

export default function SectionHeader({ eyebrow, title, subtitle, text, align = "left", light = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : ""
  const titleColor = light ? "text-white" : "text-[var(--sgmas-blue)]"
  const textColor = light ? "text-white/85" : "text-[var(--sgmas-gray)]"

  return (
    <FadeIn className={`max-w-3xl ${alignClass}`}>
      {eyebrow && <p className={`sgmas-eyebrow ${light ? "text-[var(--sgmas-green-light)]" : ""}`}>{eyebrow}</p>}
      {title && (
        <h2 className={`mt-3 text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl lg:text-4xl ${titleColor}`}>
          {title}
        </h2>
      )}
      {subtitle && <p className={`mt-4 text-lg font-medium ${textColor}`}>{subtitle}</p>}
      {text && <p className={`mt-4 leading-relaxed ${textColor}`}>{text}</p>}
    </FadeIn>
  )
}
