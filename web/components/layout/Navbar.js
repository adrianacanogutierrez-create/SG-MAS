"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import config from "@/config"
import Logo from "@/components/Logo"
import WhatsappButton from "@/components/landing/WhatsappButton"
import SocialLinks from "@/components/landing/SocialLinks"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:py-4">
        <Link
          href="/#inicio"
          className="relative z-10 flex shrink-0 items-center overflow-visible"
          aria-label={`${config.brand.logoText} — Inicio`}
        >
          <Logo variant="nav" />
        </Link>

        <ul className="hidden items-center gap-4 xl:gap-5 lg:flex">
          {config.landing.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wide text-[var(--sgmas-blue)] transition hover:text-[var(--sgmas-green)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <SocialLinks iconClass="size-4" />
          <WhatsappButton label="WhatsApp" className="text-xs" />
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-[var(--sgmas-blue)] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--sgmas-bg-gray)] bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-3">
            {config.landing.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-semibold uppercase text-[var(--sgmas-blue)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <SocialLinks />
            <WhatsappButton label="WhatsApp" className="w-full text-xs" />
          </div>
        </div>
      )}
    </header>
  )
}
