import config from "@/config"
import { whatsappLink } from "@/lib/whatsapp"
import { Mail } from "lucide-react"

export default function Footer() {
  const { descriptor, footer, social } = config.landing
  const waHref = whatsappLink()

  return (
    <footer className="bg-[var(--sgmas-blue)] text-white">
      <div className="sgmas-container py-12 md:py-14">
        <div className="max-w-md">
          <p className="text-2xl font-extrabold">{config.brand.logoText}</p>
          <p className="mt-2 text-sm text-white/80">{descriptor}</p>

          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--sgmas-green-light)]">
                WhatsApp
              </span>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="mt-1 block text-white/90 hover:text-white">
                {footer.whatsappDisplay}
              </a>
            </li>
            <li>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--sgmas-green-light)]">
                Correo
              </span>
              <a
                href={`mailto:${footer.email}`}
                className="mt-1 flex items-center gap-2 text-white/90 hover:text-white"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {footer.email}
              </a>
            </li>
            <li className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-white"
                aria-label="SG+MAS en LinkedIn"
              >
                LinkedIn
              </a>
              {social.facebookUrl ? (
                <a
                  href={social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-white"
                  aria-label="SG+MAS en Facebook"
                >
                  Facebook
                </a>
              ) : (
                <span className="text-sm font-semibold uppercase tracking-wide text-white/40" title="FACEBOOK_URL en config">
                  Facebook
                </span>
              )}
            </li>
          </ul>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-xs text-white/60">
          © SG+MAS — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
