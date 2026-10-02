import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import heroImage from "../assets/poto.jpeg"

const cvEn = "/cv-dean-en.pdf"
const cvId = "/cv-dean-id.pdf"

function Hero({ t, language }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [cvOpen, setCvOpen] = useState(false)
  const cvRef = useRef(null)

  useEffect(() => {
    setRoleIndex(0)
  }, [language])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [t.hero.roles.length])

  // Close CV dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) {
        setCvOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8F7F4] dark:bg-[#0D0E12]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Decorative vertical line */}
      <div className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-black/4 lg:block dark:bg-white/4" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 pb-20 pt-36 md:grid-cols-[1.15fr_0.85fr] md:pt-32">
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* Small label */}
          <div className="animate-[fadeUp_0.7s_ease-out_both] mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6B6A65] dark:text-[#A6A5A0]">
            <span className="h-px w-8 bg-[#4F46A5] dark:bg-[#8B87E8]" />
            {t.hero.label}
          </div>

          {/* Heading */}
          <h1 className="animate-[fadeUp_0.8s_ease-out_0.1s_both] font-['Fraunces',Georgia,serif] text-[3rem] leading-[0.98] tracking-[-0.04em] text-[#171717] sm:text-5xl lg:text-[5.2rem] dark:text-[#F3F2EE]">
            {t.hero.greeting}{" "}
            <span className="relative inline-block">
              <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                {t.hero.nameFirst}
              </span>
              <span className="absolute -bottom-1 left-0 h-0.75 w-full origin-left animate-[lineIn_0.9s_ease-out_0.7s_both] bg-[#4F46A5]/30 dark:bg-[#8B87E8]/30" />
            </span>
            <br />
            {t.hero.nameLast}
          </h1>

          {/* Rotating Role */}
          <div className="animate-[fadeUp_0.8s_ease-out_0.2s_both] mt-7 flex items-center gap-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4F46A5]/60 dark:bg-[#8B87E8]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46A5] dark:bg-[#8B87E8]" />
            </span>

            <div className="inline-grid overflow-hidden">
              {t.hero.roles.map((role, i) => (
                <span
                  key={role}
                  className={`col-start-1 row-start-1 text-lg font-medium tracking-tight text-[#171717] transition-all duration-500 ease-in-out sm:text-xl dark:text-[#F3F2EE] ${
                    i === roleIndex
                      ? "translate-y-0 opacity-100 blur-0"
                      : i ===
                          (roleIndex - 1 + t.hero.roles.length) %
                            t.hero.roles.length
                        ? "-translate-y-full opacity-0 blur-[2px]"
                        : "translate-y-full opacity-0 blur-[2px]"
                  }`}
                  aria-hidden={i !== roleIndex}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="animate-[fadeUp_0.8s_ease-out_0.3s_both] mt-6 max-w-xl text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
            {t.hero.description}
          </p>

          {/* Buttons — 2 CTA */}
          <div className="animate-[fadeUp_0.8s_ease-out_0.4s_both] mt-9 flex flex-wrap items-center gap-4">
            {/* Primary */}
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#4F46A5] hover:shadow-lg hover:shadow-[#4F46A5]/10 dark:bg-[#F3F2EE] dark:text-[#0D0E12] dark:hover:bg-[#8B87E8]"
            >
              {t.hero.ctaPrimary}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary — Download CV dropdown */}
            <div ref={cvRef} className="relative">
              <button
                onClick={() => setCvOpen((v) => !v)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-transparent px-5 py-3 text-sm font-medium text-[#171717] transition-all duration-300 hover:border-[#4F46A5] hover:text-[#4F46A5] dark:border-white/15 dark:text-[#F3F2EE] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
                aria-haspopup="true"
                aria-expanded={cvOpen}
              >
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                {t.hero.ctaSecondary}
                <svg
                  className={`h-3 w-3 transition-transform duration-300 ${cvOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-[calc(100%+8px)] z-30 w-48 origin-top-left overflow-hidden rounded-xl border border-black/10 bg-[#F8F7F4] shadow-xl shadow-black/5 transition-all duration-200 dark:border-white/10 dark:bg-[#15171D] ${
                  cvOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <a
                  href={cvEn}
                  download="CV_Dean_Umainah_Zakaria_FullStack_Developer.pdf"
                  className="flex items-center justify-between px-4 py-3 text-sm text-[#171717] transition-colors hover:bg-black/4 dark:text-[#F3F2EE] dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">🇬🇧</span>
                    {t.hero.cvEn}
                  </span>
                  <span className="text-[10px] text-[#6B6A65] dark:text-[#A6A5A0]">
                    PDF
                  </span>
                </a>
                <div className="h-px bg-black/5 dark:bg-white/5" />
                <a
                  href={cvId}
                  download="CV_Dean_Umainah_Zakaria_FullStack_Developer.pdf"
                  className="flex items-center justify-between px-4 py-3 text-sm text-[#171717] transition-colors hover:bg-black/4 dark:text-[#F3F2EE] dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">🇮🇩</span>
                    {t.hero.cvId}
                  </span>
                  <span className="text-[10px] text-[#6B6A65] dark:text-[#A6A5A0]">
                    PDF
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="animate-[fadeIn_1s_ease-out_0.2s_both] relative mx-auto w-full max-w-90">
          <div className="pointer-events-none absolute -right-5 -top-16 select-none font-['Fraunces',Georgia,serif] text-8xl leading-none text-black/5 dark:text-white/5">
            01
          </div>

          <div className="absolute -right-8 top-1/4 hidden h-3 w-3 animate-pulse rounded-full bg-[#4F46A5] sm:block dark:bg-[#8B87E8]" />

          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-full w-full border border-[#4F46A5]/20 dark:border-[#8B87E8]/20" />

            <div className="group relative aspect-3/4 overflow-hidden rounded-[3px] border border-black/10 bg-[#F1F0EC] dark:border-white/10 dark:bg-[#15171D]">
              <div className="absolute left-0 top-0 z-10 h-1 w-20 bg-[#4F46A5] dark:bg-[#8B87E8]" />

              <img
                src={heroImage}
                alt="Dean Umainah Zakaria"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/3" />
            </div>
          </div>

          <div className="mt-5 flex items-start justify-between gap-6 border-t border-black/10 pt-4 dark:border-white/10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                {t.hero.basedIn}
              </p>
              <p className="mt-1 text-sm font-medium text-[#171717] dark:text-[#F3F2EE]">
                {t.hero.location}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                {t.hero.focusLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-[#171717] dark:text-[#F3F2EE]">
                {t.hero.focusValue}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#6B6A65] md:flex dark:text-[#A6A5A0]">
        <span>{t.hero.scroll}</span>
        <span className="relative h-8 w-px overflow-hidden bg-[#D9D8D3] dark:bg-[#292B32]">
          <span className="absolute left-0 top-0 h-3 w-full animate-[scrollLine_1.8s_ease-in-out_infinite] bg-[#4F46A5] dark:bg-[#8B87E8]" />
        </span>
      </div>
    </section>
  )
}

export default Hero
