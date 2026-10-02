import { useReveal } from "../hooks/useReveal";

function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();
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
  );
}

function Contact({ t }) {
  const c = t.contact;

  const channels = [
    {
      label: c.emailLabel,
      value: "deanumainah.kv16@gmail.com",
      href: "mailto:deanumainah.kv16@gmail.com",
    },
    {
      label: c.phoneLabel,
      value: "+62 823-2021-6812",
      href: "tel:+6282320216812",
    },
    {
      label: c.linkedinLabel,
      value: "linkedin.com/in/deanumainah",
      href: "https://linkedin.com/in/deanumainah",
    },
    {
      label: c.githubLabel,
      value: "github.com/adeanumainah",
      href: "https://github.com/adeanumainah",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F7F4] py-28 dark:bg-[#0D0E12]"
    >
      {/* Decorative number */}
      <div className="pointer-events-none absolute right-[8%] top-16 hidden select-none font-['Fraunces',Georgia,serif] text-[10rem] leading-none text-black/3 lg:block dark:text-white/3">
        05
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

        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-20">
          {/* Left — Heading + CTA */}
          <div>
            <Reveal delay={100}>
              <p className="mb-5 text-sm text-[#4F46A5] dark:text-[#8B87E8]">
                {c.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="max-w-lg font-['Fraunces',Georgia,serif] text-5xl leading-[1.05] tracking-[-0.035em] text-[#171717] sm:text-6xl dark:text-[#F3F2EE]">
                {c.headingLine1}
                <br />
                <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                  {c.headingLine2}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-7 max-w-md text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
                {c.description}
              </p>
            </Reveal>

            <Reveal delay={400}>
              <a
                href="mailto:deanumainah.kv16@gmail.com"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#4F46A5] hover:shadow-lg hover:shadow-[#4F46A5]/10 dark:bg-[#F3F2EE] dark:text-[#0D0E12] dark:hover:bg-[#8B87E8]"
              >
                {c.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right — Channels */}
          <div className="flex flex-col justify-center">
            <div className="border-t border-black/10 dark:border-white/10">
              {channels.map((ch, i) => (
                <Reveal key={ch.label} delay={500 + i * 80}>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-black/10 py-5 transition-colors dark:border-white/10"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#6B6A65] dark:text-[#A6A5A0]">
                        {ch.label}
                      </span>
                      <span className="text-[15px] font-medium text-[#171717] transition-colors group-hover:text-[#4F46A5] dark:text-[#F3F2EE] dark:group-hover:text-[#8B87E8]">
                        {ch.value}
                      </span>
                    </div>

                    <span className="text-[#6B6A65] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:group-hover:text-[#8B87E8]">
                      ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={900}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                <span>{c.location}</span>
                <span>{c.availability}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
