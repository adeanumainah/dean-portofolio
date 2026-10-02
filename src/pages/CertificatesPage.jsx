import { useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"

import cCertif from "../assets/certificate/c-certif.jpg"
import sdCertif from "../assets/certificate/sd-certif.jpg"
import dbCertif from "../assets/certificate/db-certif.jpg"
import webCertif from "../assets/certificate/web-certif.jpg"
import javafdCertif from "../assets/certificate/javafdcertif.jpg"
import gitCertif from "../assets/certificate/git-certif.jpg"
import javaadCertif from "../assets/certificate/javaad-certif.jpg"
import reactfdCertif from "../assets/certificate/reactfd-certif.jpg"
import reactadCertif from "../assets/certificate/reactad-certif.jpg"
import instjava from "../assets/certificate/instructur-java.jpg"

/* ─── Reveal ─── */
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-6 opacity-0 blur-[2px]"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ─── Image map (key → import) ─── */
const images = {
  reactad: reactadCertif,
  reactfd: reactfdCertif,
  javaad: javaadCertif,
  git: gitCertif,
  javafd: javafdCertif,
  web: webCertif,
  db: dbCertif,
  sd: sdCertif,
  c: cCertif,
  instjava: instjava,
}

/* ─── Card ─── */
function CertificateCard({ item, index, onOpen }) {
  return (
    <Reveal delay={index * 60}>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/12 hover:shadow-xl hover:shadow-black/4 dark:border-white/8 dark:bg-[#15171D] dark:hover:border-white/15 dark:hover:shadow-black/30">
        {/* Image */}
        <button
          onClick={() => onOpen(index)}
          className="relative block w-full overflow-hidden bg-[#ECEAE5] dark:bg-[#1B1D24]"
          aria-label={`View ${item.name}`}
        >
          <div className="aspect-4/3">
            <img
              src={images[item.key]}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          {/* Hover overlay */}
<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
  <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full border border-white/30 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
    <svg
      className="h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  </div>
</div>

          {/* Badge (khusus instruktur) */}
          {item.badge && (
            <span className="absolute left-3 top-3 rounded-full border border-[#4F46A5]/30 bg-white/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#4F46A5] backdrop-blur-sm dark:border-[#8B87E8]/40 dark:bg-[#0D0E12]/90 dark:text-[#8B87E8]">
              {item.badge}
            </span>
          )}
        </button>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
            <span className="font-mono text-[#4F46A5] dark:text-[#8B87E8]">
              {item.number}
            </span>
            <span className="h-px w-4 bg-[#D9D8D3] dark:bg-[#292B32]" />
            <span>{item.date}</span>
          </div>

          <h2 className="mt-4 font-['Fraunces',Georgia,serif] text-xl leading-tight tracking-[-0.02em] text-[#171717] dark:text-[#F3F2EE]">
            {item.name}
          </h2>

          <p className="mt-3 text-sm text-[#6B6A65] dark:text-[#A6A5A0]">
            {item.issuer}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

/* ─── Modal ─── */
function CertificateModal({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]

  // ESC + arrow key handler
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [onClose, onPrev, onNext])

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-[#171717] shadow-lg transition-transform hover:scale-105 sm:right-6 sm:top-6 dark:bg-[#15171D]/95 dark:text-[#F3F2EE]"
        aria-label="Close"
      >
        ×
      </button>

      {/* Counter */}
      <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:left-6 sm:top-6">
        {index + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:left-6"
        aria-label="Previous"
      >
        ←
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:right-6"
        aria-label="Next"
      >
        →
      </button>

      {/* Image + caption */}
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[item.key]}
          alt={item.name}
          className="max-h-[75vh] w-auto rounded-lg object-contain shadow-2xl"
        />

        {/* Caption */}
        <div className="mt-5 max-w-2xl text-center">
          <h3 className="font-['Fraunces',Georgia,serif] text-lg text-white sm:text-xl">
            {item.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">
            {item.issuer} · {item.date}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── Main ─── */
function CertificatesPage({ t }) {
  const c = t.certificatesPage
  const [selectedIndex, setSelectedIndex] = useState(null)

  const items = c.items

  const close = useCallback(() => setSelectedIndex(null), [])
  const prev = useCallback(
    () => setSelectedIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  )
  const next = useCallback(
    () => setSelectedIndex((i) => (i + 1) % items.length),
    [items.length]
  )

  return (
    <main className="min-h-screen bg-[#F8F7F4] pb-24 pt-32 dark:bg-[#0D0E12] md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back */}
        <Reveal>
          <Link
            to="/"
            className="group mb-12 inline-flex items-center gap-2 text-sm text-[#6B6A65] transition-colors hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:hover:text-[#8B87E8]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            {c.backToHome}
          </Link>
        </Reveal>

        {/* Header */}
        <div className="max-w-3xl">
          <Reveal delay={100}>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4F46A5] dark:text-[#8B87E8]">
                {c.label}
              </span>
              <span className="h-px w-10 bg-[#D9D8D3] dark:bg-[#292B32]" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="mt-6 font-['Fraunces',Georgia,serif] text-5xl leading-[1.05] tracking-[-0.035em] text-[#171717] sm:text-6xl lg:text-7xl dark:text-[#F3F2EE]">
              {c.headingLine1}
              <br />
              <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                {c.headingLine2}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
              {c.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <CertificateCard
              key={item.key}
              item={item}
              index={i}
              onOpen={setSelectedIndex}
            />
          ))}
        </div>

        {/* Bottom back */}
        <Reveal>
          <div className="mt-16 border-t border-black/10 pt-8 dark:border-white/10">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-[#6B6A65] transition-colors hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:hover:text-[#8B87E8]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {c.backToHome}
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <CertificateModal
          items={items}
          index={selectedIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </main>
  )
}

export default CertificatesPage
