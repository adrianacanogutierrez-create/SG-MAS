import config from "@/config"
import { whatsappLink } from "@/lib/whatsapp"
import { MessageCircle } from "lucide-react"

export default function WhatsappFloat() {
  const href = whatsappLink(config.landing.whatsapp.defaultMessage)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Hablar por WhatsApp"
      aria-label="Contactar a SG+MAS por WhatsApp Business"
      className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-[var(--sgmas-green)] px-4 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[var(--sgmas-blue)] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden />
      <span className="hidden min-[480px]:inline">WhatsApp</span>
    </a>
  )
}
