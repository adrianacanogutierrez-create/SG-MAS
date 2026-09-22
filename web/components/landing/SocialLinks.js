import config from "@/config"
import { Linkedin, Facebook } from "lucide-react"

export default function SocialLinks({ className = "", iconClass = "size-5" }) {
  const { linkedin, facebookUrl } = config.landing.social

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="SG+MAS en LinkedIn"
        className="text-[var(--sgmas-blue)] transition hover:text-[var(--sgmas-green)]"
      >
        <Linkedin className={iconClass} />
      </a>
      {facebookUrl ? (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SG+MAS en Facebook"
          className="text-[var(--sgmas-blue)] transition hover:text-[var(--sgmas-green)]"
        >
          <Facebook className={iconClass} />
        </a>
      ) : null}
    </div>
  )
}
