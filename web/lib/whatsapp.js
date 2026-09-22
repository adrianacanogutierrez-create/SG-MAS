import config from "@/config"

/** Enlace wa.me con mensaje codificado de forma segura. */
export function whatsappUrl(phoneDigits, message = "") {
  const phone = String(phoneDigits || config.landing.whatsapp.phone).replace(/\D/g, "")
  if (!message) return `https://wa.me/${phone}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function whatsappLink(message) {
  return whatsappUrl(config.landing.whatsapp.phone, message)
}
