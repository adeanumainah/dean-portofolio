import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

import pawcare from "../assets/projects/pawcare.png";
import bookverse from "../assets/projects/bookverse.png";
import coffeeCorner from "../assets/projects/coffee-corner.png";
import amortizelt from "../assets/projects/amortizelt.png";
import recipeRealm from "../assets/projects/recipe-realm.png";
import librarySystem from "../assets/projects/library-system.png";

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

const images = {
  pawcare,
  bookverse,
  coffeeCorner,
  amortizelt,
  recipeRealm,
  librarySystem,
};

function ProjectItem({ item, image, index }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group border-t border-black/10 py-16 dark:border-white/10 md:py-20">
        {/* Header row */}
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#6B6A65] transition-colors group-hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:group-hover:text-[#8B87E8]">
              {item.number}
            </span>
            <span className="h-px w-6 bg-[#D9D8D3] dark:bg-[#292B32]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
              {item.category}
            </span>
          </div>
          <span className="font-mono text-xs text-[#6B6A65] dark:text-[#A6A5A0]">
            {item.period}
          </span>
        </div>

        {/* Two-column: image + info */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14">
          {/* Image */}
          <div className="relative aspect-16/10 overflow-hidden rounded-md border border-black/8 bg-[#F1F0EC] dark:border-white/8 dark:bg-[#15171D]">
            {image ? (
              <img
                src={image}
                alt={item.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-['Fraunces',Georgia,serif] text-7xl text-[#C9C7C1] dark:text-[#3A3C43]">
                {item.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="font-['Fraunces',Georgia,serif] text-3xl tracking-tight text-[#171717] transition-colors duration-300 group-hover:text-[#4F46A5] sm:text-4xl dark:text-[#F3F2EE] dark:group-hover:text-[#8B87E8]">
              {item.name}
            </h2>

            <p className="mt-2 text-sm text-[#4F46A5] dark:text-[#8B87E8]">
              {item.tagline}
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
              {item.description}
            </p>

            {/* Tech stack */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
                {item.labels.techStack}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-[#6B6A65] transition-colors hover:border-[#4F46A5] hover:text-[#4F46A5] dark:border-white/10 dark:text-[#A6A5A0] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {item.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-full border border-[#171717]/15 bg-[#171717]/3 px-4 py-2 text-xs font-medium text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F46A5] hover:bg-[#4F46A5] hover:text-white dark:border-white/15 dark:bg-white/3 dark:text-[#F3F2EE] dark:hover:border-[#8B87E8] dark:hover:bg-[#8B87E8] dark:hover:text-[#0D0E12]"
                  >
                    {/* GitHub icon */}
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
                    </svg>

                    {link.label}

                    <span className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"></span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Highlights — full width di bawah */}
        {item.points.length > 0 && (
          <div className="mt-12 md:ml-[calc(1.3fr+3.5rem)]">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#6B6A65] dark:text-[#A6A5A0]">
              {item.labels.highlights}
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2 md:gap-x-8">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]"
                >
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#4F46A5] dark:bg-[#8B87E8]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Reveal>
  );
}

/* ─── Main ─── */
function ProjectsPage({ t }) {
  const p = t.projectsPage;

  return (
    <main className="min-h-screen bg-[#F8F7F4] pb-24 pt-32 dark:bg-[#0D0E12] md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <Link
              to="/"
              className="group mb-10 inline-flex items-center gap-2 text-sm text-[#6B6A65] transition-colors hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:hover:text-[#8B87E8]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {p.backToHome}
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4F46A5] dark:text-[#8B87E8]">
                {p.eyebrow}
              </span>
              <span className="h-px w-10 bg-[#D9D8D3] dark:bg-[#292B32]" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="mt-6 font-['Fraunces',Georgia,serif] text-5xl leading-[1.05] tracking-[-0.035em] text-[#171717] sm:text-6xl lg:text-7xl dark:text-[#F3F2EE]">
              {p.headingLine1}
              <br />
              <span className="text-[#4F46A5] dark:text-[#8B87E8]">
                {p.headingLine2}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#6B6A65] dark:text-[#A6A5A0]">
              {p.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Projects */}
        <div className="mt-20">
          {p.items.map((item, i) => (
            <ProjectItem
              key={item.key}
              item={item}
              image={images[item.key]}
              index={i}
            />
          ))}
        </div>

        {/* Back to home */}
        <Reveal>
          <div className="border-t border-black/10 pt-8 dark:border-white/10">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-[#6B6A65] transition-colors hover:text-[#4F46A5] dark:text-[#A6A5A0] dark:hover:text-[#8B87E8]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {p.backToHome}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

export default ProjectsPage;
