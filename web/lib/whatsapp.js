/** Enlace wa.me con mensaje codificado de forma segura. */
export function whatsappUrl(phoneDigits, message) {
  const phone = String(phoneDigits).replace(/\D/g, "")
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
