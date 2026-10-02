import { Link } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"

import reactadCertif from "../assets/certificate/reactad-certif.jpg"
import reactfdCertif from "../assets/certificate/reactfd-certif.jpg"
import javaadCertif from "../assets/certificate/javaad-certif.jpg"

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

function CertificatePreview({ item, index }) {
  return (
    <Reveal delay={index * 120}>
      <div className="group">
        {/* Image */}
        <div className="relative aspect-4/3 overflow-hidden rounded-md border border-black/8 bg-[#ECEAE5] dark:border-white/8 dark:bg-[#1B1D24]">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
        </div>

        {/* Meta */}
        <div className="mt-5">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
            <span className="text-[#4F46A5] dark:text-[#8B87E8]">
              {item.number}
            </span>
            <span className="h-px w-4 bg-[#D9D8D3] dark:bg-[#292B32]" />
            <span>{item.date}</span>
          </div>

          <h3 className="mt-3 font-['Fraunces',Georgia,serif] text-xl leading-tight tracking-[-0.02em] text-[#171717] dark:text-[#F3F2EE]">
            {item.name}
          </h3>

          <p className="mt-2 text-sm text-[#6B6A65] dark:text-[#A6A5A0]">
            {item.issuer}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

function Certificates({ t }) {
  const c = t.certificates

  const preview = [
    { image: reactadCertif, ...c.featured[0] },
    { image: reactfdCertif, ...c.featured[1] },
    { image: javaadCertif, ...c.featured[2] },
  ]

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#F1F0EC] py-28 dark:bg-[#111318]"
    >
      {/* Decorative number */}
      <div className="pointer-events-none absolute right-[8%] top-16 hidden select-none font-['Fraunces',Georgia,serif] text-[10rem] leading-none text-black/3 lg:block dark:text-white/3">
        04
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section label */}
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4F46A5] dark:text-[#8B87E8]">
              {c.number}
            </span>
            <span className="h-px w-10 bg-[#D9D8D3] dark:bg-[#292B32]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B6A65] dark:text-[#A6A5A0]">
              {c.label}
            </span>
          </div>
        </Reveal>

        {/* Heading + Description */}
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">
          <Reveal delay={100}>
            <div>
              <p className="mb-5 text-sm text-[#4F46A5] dark:text-[#8B87E8]">
                {c.eyebrow}
              </p>
              <h2 className="max-w-lg font-['Fraunces',Georgia,serif] text-5xl leading-[1.05] tracking-[-0.035em] text-[#171717] sm:text-6xl dark:text-[#F3F2EE]">
                {c.headingLine1}
                <br />
                <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                  {c.headingLine2}
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="max-w-md md:ml-auto">
              <p className="text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
                {c.description}
              </p>
              <Link
                to="/certificates"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#171717] px-5 py-2.5 text-sm font-medium text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F46A5] hover:text-[#4F46A5] dark:border-[#F3F2EE] dark:text-[#F3F2EE] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
              >
                {c.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Preview grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item, i) => (
            <CertificatePreview key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Bottom line */}
        <Reveal delay={400}>
          <div className="mt-20 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3 py-5 text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
              <span>{c.categories}</span>
              <span>{c.period}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Certificates
