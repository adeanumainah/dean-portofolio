import { Link } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import pawcare from "../assets/projects/pawcare.png"
import bookverse from "../assets/projects/bookverse.png"
import coffeeCorner from "../assets/projects/coffee-corner.png"

function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[2px]"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function ProjectCard({ item, index, image, t }) {
  return (
    <Reveal delay={index * 120}>
      <Link
        to="/projects"
        className="group block"
      >
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden rounded-md border border-black/8 bg-[#F1F0EC] dark:border-white/8 dark:bg-[#15171D]">
          {image ? (
            <img
              src={image}
              alt={item.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-['Fraunces',Georgia,serif] text-6xl text-[#C9C7C1] dark:text-[#3A3C43]">
              {item.name.charAt(0)}
            </div>
          )}

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/4" />

          {/* Arrow badge */}
          <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F7F4]/90 text-sm text-[#171717] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-[#0D0E12]/90 dark:text-[#F3F2EE]">
            ↗
          </div>
        </div>

        {/* Meta */}
        <div className="mt-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
            <span className="text-[#4F46A5] dark:text-[#8B87E8]">{item.number}</span>
            <span className="h-px w-4 bg-[#D9D8D3] dark:bg-[#292B32]" />
            <span>{item.category}</span>
          </div>

          <h3 className="mt-3 font-['Fraunces',Georgia,serif] text-2xl tracking-[-0.02em] text-[#171717] transition-colors duration-300 group-hover:text-[#4F46A5] dark:text-[#F3F2EE] dark:group-hover:text-[#8B87E8]">
            {item.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6B6A65] dark:text-[#A6A5A0]">
            {item.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.12em] text-[#6B6A65] dark:text-[#A6A5A0]">
            {item.stack.slice(0, 3).map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#C9C7C1] dark:text-[#3A3C43]">·</span>}
                <span>{tech}</span>
              </span>
            ))}
            {item.stack.length > 3 && (
              <span className="text-[#C9C7C1] dark:text-[#3A3C43]">
                +{item.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

function Projects({ t }) {
  const p = t.projects

  const featured = [
    { key: "pawcare", image: pawcare },
    { key: "bookverse", image: bookverse },
    { key: "coffeeCorner", image: coffeeCorner },
  ]

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F8F7F4] py-28 dark:bg-[#0D0E12]"
    >
      {/* Decorative number */}
      <div className="pointer-events-none absolute right-[8%] top-20 hidden select-none font-['Fraunces',Georgia,serif] text-[10rem] leading-none text-black/3 lg:block dark:text-white/3">
        03
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section label */}
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4F46A5] dark:text-[#8B87E8]">
              {p.number}
            </span>
            <span className="h-px w-10 bg-[#D9D8D3] dark:bg-[#292B32]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6B6A65] dark:text-[#A6A5A0]">
              {p.label}
            </span>
          </div>
        </Reveal>

        {/* Heading + Description */}
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">
          <Reveal delay={100}>
            <div>
              <p className="mb-5 text-sm text-[#4F46A5] dark:text-[#8B87E8]">
                {p.eyebrow}
              </p>
              <h2 className="max-w-lg font-['Fraunces',Georgia,serif] text-5xl leading-[1.05] tracking-[-0.035em] text-[#171717] sm:text-6xl dark:text-[#F3F2EE]">
                {p.headingLine1}
                <br />
                <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                  {p.headingLine2}
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="max-w-md md:ml-auto">
              <p className="text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
                {p.description}
              </p>
              <Link
                to="/projects"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#171717] px-5 py-2.5 text-sm font-medium text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F46A5] hover:text-[#4F46A5] dark:border-[#F3F2EE] dark:text-[#F3F2EE] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
              >
                {p.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Featured cards */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => {
            const item = p.featured[f.key]
            return (
              <ProjectCard
                key={f.key}
                item={item}
                image={f.image}
                index={i}
                t={t}
              />
            )
          })}
        </div>

        {/* Bottom line */}
        <Reveal delay={400}>
          <div className="mt-20 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3 py-5 text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
              <span>{p.categories}</span>
              <span>{p.period}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects
