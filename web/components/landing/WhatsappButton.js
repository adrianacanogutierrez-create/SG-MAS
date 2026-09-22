import config from "@/config"
import { whatsappLink } from "@/lib/whatsapp"

export default function WhatsappButton({
  label = "WhatsApp",
  message,
  variant = "primary",
  className = "",
}) {
  const href = whatsappLink(message || config.landing.whatsapp.defaultMessage)
  const base =
    variant === "outline" ? "btn-sgmas-outline" : variant === "secondary" ? "btn-sgmas-secondary" : "btn-sgmas-cta"

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
      {label}
    </a>
  )
}
