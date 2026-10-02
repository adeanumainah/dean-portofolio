import { Link } from "react-router-dom"

function About({ t }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F1F0EC] py-28 dark:bg-[#111318]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border border-[#4F46A5]/10 dark:border-[#8B87E8]/10" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4F46A5] dark:text-[#8B87E8]">
            02
          </span>

          <span className="h-px w-10 bg-[#D9D8D3] dark:bg-[#292B32]" />

          <span className="text-xs uppercase tracking-[0.2em] text-[#6B6A65] dark:text-[#A6A5A0]">
            {t?.about?.label ?? "About"}
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          {/* Left */}
          <div>
            <p className="mb-5 text-sm text-[#4F46A5] dark:text-[#8B87E8]">
              {t?.about?.eyebrow ?? "Who I am"}
            </p>

            <h2 className="max-w-sm font-['Fraunces',Georgia,serif] text-4xl leading-[1.05] tracking-[-0.03em] text-[#171717] sm:text-5xl dark:text-[#F3F2EE]">
              {t?.about?.headingLine1 ?? "Curious by nature,"}{" "}
              <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                {t?.about?.headingLine2 ?? "builder by choice."}
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#33322F] dark:text-[#D5D4CF]">
              {t?.about?.lead ??
                "I build web applications with Java, Spring Boot, and React — combining analytical thinking with hands-on development."}
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
              {t?.about?.body ??
                "My background in software engineering and accounting gives me a practical lens for building systems that are accurate, structured, and reliable. I focus on frontend and backend development, with an emphasis on clean architecture and thoughtful user experience."}
            </p>

            {/* Info cards */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-sm border border-black/8 bg-white/50 p-5 transition-colors duration-300 hover:border-[#4F46A5]/30 hover:bg-white dark:border-white/8 dark:bg-white/2 dark:hover:border-[#8B87E8]/30 dark:hover:bg-white/4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                  {t?.about?.cardFocus ?? "Focus"}
                </p>
                <p className="mt-3 text-sm font-medium text-[#171717] dark:text-[#F3F2EE]">
                  {t?.about?.cardFocusValue ?? "Web Development"}
                </p>
              </div>

              <div className="rounded-sm border border-black/8 bg-white/50 p-5 transition-colors duration-300 hover:border-[#4F46A5]/30 hover:bg-white dark:border-white/8 dark:bg-white/2 dark:hover:border-[#8B87E8]/30 dark:hover:bg-white/4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                  {t?.about?.cardStack ?? "Stack"}
                </p>
                <p className="mt-3 text-sm font-medium text-[#171717] dark:text-[#F3F2EE]">
                  {t?.about?.cardStackValue ?? "Java · React"}
                </p>
              </div>

              <div className="rounded-sm border border-black/8 bg-white/50 p-5 transition-colors duration-300 hover:border-[#4F46A5]/30 hover:bg-white dark:border-white/8 dark:bg-white/2 dark:hover:border-[#8B87E8]/30 dark:hover:bg-white/4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                  {t?.about?.cardBased ?? "Based in"}
                </p>
                <p className="mt-3 text-sm font-medium text-[#171717] dark:text-[#F3F2EE]">
                  {t?.about?.cardBasedValue ?? "Bandung"}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#171717] px-5 py-2.5 text-sm font-medium text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F46A5] hover:text-[#4F46A5] dark:border-[#F3F2EE] dark:text-[#F3F2EE] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
              >
                {t?.about?.cta ?? "More about me"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
