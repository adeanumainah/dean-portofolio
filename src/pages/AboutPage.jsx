import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

/* ─── Hook: reveal on scroll ─── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

/* ─── Wrapper: fade up saat masuk viewport ─── */
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

/* ─── Timeline item ─── */
function TimelineItem({ period, role, org, points, index = 0 }) {
  return (
    <Reveal delay={index * 100}>
      <article className="relative pl-8">
        {/* Dot */}
        <span className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#F8F7F4] bg-[#4F46A5] dark:border-[#0D0E12] dark:bg-[#8B87E8]" />

        <p className="text-xs uppercase tracking-[0.12em] text-[#4F46A5] dark:text-[#8B87E8]">
          {period}
        </p>

        <h3 className="mt-3 text-lg font-medium tracking-tight text-[#171717] dark:text-[#F3F2EE]">
          {role}
        </h3>

        <p className="mt-2 text-sm text-[#6B6A65] dark:text-[#A6A5A0]">{org}</p>

        <ul className="mt-5 space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-3 text-sm leading-7 text-[#6B6A65] dark:text-[#A6A5A0]"
            >
              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#C9C7C1] dark:bg-[#3A3C43]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}
/* ─── Section header ─── */
function SectionHeader({ number, title, description }) {
  return (
    <Reveal>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B6A65] dark:text-[#A6A5A0]">
          {number}
        </p>

        <h2 className="mt-4 font-['Fraunces',Georgia,serif] text-3xl tracking-[-0.02em] text-[#171717] dark:text-[#F3F2EE]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#6B6A65] dark:text-[#A6A5A0]">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}

/* ─── Section wrapper ─── */
function Section({ children }) {
  return (
    <section className="border-t border-black/5 px-6 py-24 dark:border-white/5">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
        {children}
      </div>
    </section>
  )
}

/* ─── Main ─── */
function AboutPage({ t }) {
  const a = t.aboutPage

  return (
    <main className="bg-[#F8F7F4] dark:bg-[#0D0E12]">
      {/* Header */}
      <section className="px-6 pb-20 pt-32 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-[#6B6A65] transition-colors hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:hover:text-[#8B87E8]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {a.backToHome}
            </Link>
          </Reveal>

          <div className="mt-16">
            <Reveal delay={100}>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4F46A5] dark:text-[#8B87E8]">
                  {a.label}
                </span>
                <span className="h-px w-10 bg-[#D9D8D3] dark:bg-[#292B32]" />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="mt-8 max-w-4xl font-['Fraunces',Georgia,serif] text-5xl leading-none tracking-[-0.04em] text-[#171717] sm:text-6xl lg:text-7xl dark:text-[#F3F2EE]">
                {a.headingLine1}
                <br />
                <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                  {a.headingLine2}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={350}>
              <p className="mt-8 max-w-2xl text-base leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
                {a.subtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 01 — About me */}
      <Section>
        <SectionHeader number={a.aboutMe.number} title={a.aboutMe.title} />

        <div className="max-w-2xl">
          <Reveal delay={100}>
            <p className="text-lg leading-8 text-[#33322F] dark:text-[#D5D4CF]">
              {a.aboutMe.paragraph1}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
              {a.aboutMe.paragraph2}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
              {a.aboutMe.paragraph3}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 02 — Skills */}
      <Section>
        <SectionHeader number={a.skills.number} title={a.skills.title} />

        <div className="grid gap-8 sm:grid-cols-2">
          {a.skills.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="border-t border-black/10 pt-5 dark:border-white/10">
                <p className="text-sm font-medium text-[#171717] dark:text-[#F3F2EE]">
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
                  {s.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 — Experience */}
      <Section>
        <SectionHeader
          number={a.experience.number}
          title={a.experience.title}
          description={a.experience.description}
        />

         <div className="relative space-y-16">
    {/* Garis timeline — 1 garis panjang */}
    <span className="pointer-events-none absolute left-0 top-2 bottom-2 w-px bg-[#D9D8D3] dark:bg-[#292B32]" />

          {a.experience.items.map((item, i) => (
            <TimelineItem
              key={item.role + item.period}
              period={item.period}
              role={item.role}
              org={item.org}
              points={item.points}
              index={i}
            />
          ))}
        </div>
      </Section>

      {/* 04 — Training */}
      <Section>
        <SectionHeader
          number={a.training.number}
          title={a.training.title}
          description={a.training.description}
        />

         <div className="relative space-y-16">
    <span className="pointer-events-none absolute left-0 top-2 bottom-2 w-px bg-[#D9D8D3] dark:bg-[#292B32]" />
          {a.training.items.map((item, i) => (
            <TimelineItem
              key={item.title + item.period}
              period={item.period}
              role={item.title}
              org={item.org}
              points={item.points}
              index={i}
            />
          ))}
        </div>
      </Section>

      {/* Back to Home */}
      <section className="border-t border-black/5 px-6 py-16 dark:border-white/5">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-sm font-medium text-[#6B6A65] transition-colors hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:hover:text-[#8B87E8]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {a.backToHome}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default AboutPage

