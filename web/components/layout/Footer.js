import Link from "next/link"
import config from "@/config"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const { descriptor, nav, footer, tagline } = config.landing

  return (
    <footer className="bg-[var(--sgmas-blue)] text-white">
      <div className="sgmas-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-extrabold">{config.brand.logoText}</p>
            <p className="mt-2 text-sm text-white/75">{descriptor}</p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">{tagline}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--sgmas-green-light)]">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--sgmas-green-light)]">
              Contacto
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${footer.phone}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <Phone className="size-4 shrink-0" />
                  {footer.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footer.email}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <Mail className="size-4 shrink-0" />
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={footer.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  LinkedIn · {footer.linkedin.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SG+MAS. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            {footer.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
