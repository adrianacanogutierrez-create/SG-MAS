import Image from "next/image"
import config from "@/config"

const LOGO_VARIANTS = {
  nav: "h-11 w-auto sm:h-12 lg:h-16 xl:h-[4.5rem]",
}

export default function Logo({ variant = "nav", className = "" }) {
  if (config.brand.logoSrc) {
    return (
      <Image
        src={config.brand.logoSrc}
        alt={config.brand.logoText}
        width={728}
        height={347}
        className={`object-contain object-left ${LOGO_VARIANTS[variant] || LOGO_VARIANTS.nav} ${className}`}
        priority
      />
    )
  }

  return (
    <span className={`inline-flex items-center font-extrabold text-[var(--sgmas-blue)] ${className}`}>
      {config.brand.logoText}
    </span>
  )
}
