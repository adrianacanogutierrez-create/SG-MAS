"use client"

import { useState } from "react"
import config from "@/config"
import SectionHeader from "./SectionHeader"
import FadeIn from "./FadeIn"
import { GraduationCap, ChevronDown } from "lucide-react"
import { whatsappUrl } from "@/lib/whatsapp"

function CourseCard({ course, phone, registeredLabel, delay }) {
  const [open, setOpen] = useState(false)
  const waHref = whatsappUrl(phone, course.whatsappMessage)

  return (
    <FadeIn delay={delay} className="sgmas-card flex flex-col">
      <span className="inline-flex w-fit rounded-md bg-[var(--sgmas-blue)]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--sgmas-blue)]">
        {course.category}
      </span>
      <GraduationCap className="mt-4 size-6 text-[var(--sgmas-green)]" />
      <h4 className="mt-3 text-base font-bold leading-snug text-[var(--sgmas-blue)]">{course.name}</h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--sgmas-gray)]">{course.description}</p>
      <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-[var(--sgmas-gray)]">
        {registeredLabel}
      </p>

      {open && (
        <div className="mt-4 border-t border-[var(--sgmas-bg-gray)] pt-4 text-sm text-[var(--sgmas-gray)]">
          <p className="font-semibold text-[var(--sgmas-blue)]">Objetivo</p>
          <p className="mt-2 leading-relaxed">{course.objective}</p>
          <p className="mt-4 font-semibold text-[var(--sgmas-blue)]">Temario</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 leading-relaxed">
            {course.temario.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 font-semibold text-[var(--sgmas-blue)]">Referencia normativa</p>
          <p className="mt-2 leading-relaxed">{course.normativa}</p>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          className="btn-sgmas-secondary flex-1 text-xs sm:min-w-[8rem]"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Ver temario
          <ChevronDown className={`size-4 transition ${open ? "rotate-180" : ""}`} />
        </button>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sgmas-cta flex-1 text-center text-xs sm:min-w-[8rem]"
        >
          Solicitar información
        </a>
      </div>
    </FadeIn>
  )
}

export default function Capacitacion() {
  const {
    id,
    title,
    subtitle,
    text,
    stpsBadge,
    courseRegisteredLabel,
    whatsappPhone,
    courses,
    finalCta,
  } = config.landing.capacitacion

  const finalWaHref = whatsappUrl(whatsappPhone, finalCta.whatsappMessage)

  return (
    <section id={id} className="sgmas-section bg-[var(--sgmas-bg-light)]">
      <div className="sgmas-container">
        <SectionHeader title={title} subtitle={subtitle} text={text} />

        <FadeIn className="mt-6">
          <span className="inline-flex rounded-md border border-[var(--sgmas-green)] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--sgmas-blue)]">
            {stpsBadge}
          </span>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard
              key={course.name}
              course={course}
              phone={whatsappPhone}
              registeredLabel={courseRegisteredLabel}
              delay={i * 60}
            />
          ))}
        </div>

        <FadeIn className="mt-14 rounded-lg border border-[var(--sgmas-bg-gray)] bg-white p-8 md:p-10">
          <h3 className="text-lg font-bold uppercase text-[var(--sgmas-blue)] md:text-xl">{finalCta.title}</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-[var(--sgmas-gray)]">{finalCta.text}</p>
          <a
            href={finalWaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sgmas-cta mt-6 inline-flex"
          >
            {finalCta.buttonLabel}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
