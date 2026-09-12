"use client"

export function scrollToContact({ service = null, message = "" } = {}) {
  window.dispatchEvent(
    new CustomEvent("sgmas:contact", {
      detail: { service, message },
    })
  )
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
}

export default function CtaButton({
  label,
  service = null,
  message = "",
  variant = "primary",
  className = "",
  href = null,
}) {
  const base =
    variant === "outline"
      ? "btn-sgmas-outline"
      : variant === "secondary"
        ? "btn-sgmas-secondary"
        : "btn-sgmas-cta"

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {label}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`${base} ${className}`}
      onClick={() => scrollToContact({ service, message })}
    >
      {label}
    </button>
  )
}
