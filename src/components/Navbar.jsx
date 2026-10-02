import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"

function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/certificates", label: t.nav.certificates },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b bg-[#F8F7F4]/80 backdrop-blur-xl transition-all duration-300 dark:bg-[#0D0E12]/80 ${
        scrolled
          ? "border-black/6 shadow-sm shadow-black/3 dark:border-white/6 dark:shadow-black/20"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4F46A5]/30 font-['Fraunces',Georgia,serif] text-sm font-medium text-[#4F46A5] transition-all duration-300 group-hover:border-[#4F46A5] group-hover:bg-[#4F46A5] group-hover:text-white dark:border-[#8B87E8]/40 dark:text-[#8B87E8] dark:group-hover:border-[#8B87E8] dark:group-hover:bg-[#8B87E8] dark:group-hover:text-[#0D0E12]">
            D
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium tracking-tight text-[#171717] dark:text-[#F3F2EE]">
              Dean Umainah Zakaria
            </p>
            <p className="text-[11px] text-[#6B6A65] dark:text-[#A6A5A0]">
              {t.nav.role ?? "Full Stack Developer"}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative py-2 text-sm transition-colors ${
                  isActive
                    ? "text-[#4F46A5] dark:text-[#8B87E8]"
                    : "text-[#6B6A65] hover:text-[#171717] dark:text-[#A6A5A0] dark:hover:text-[#F3F2EE]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#4F46A5] transition-all duration-300 dark:bg-[#8B87E8] ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Contact — samakan dengan nav link lain */}
          <Link
            to="/#contact"
            className="py-2 text-sm text-[#6B6A65] transition-colors hover:text-[#171717] dark:text-[#A6A5A0] dark:hover:text-[#F3F2EE]"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-black/10 p-1 text-[11px] dark:border-white/10">
            <button
              onClick={() => setLanguage("id")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 ${
                language === "id"
                  ? "bg-[#171717] text-white dark:bg-[#F3F2EE] dark:text-[#0D0E12]"
                  : "text-[#6B6A65] hover:text-[#171717] dark:text-[#A6A5A0] dark:hover:text-[#F3F2EE]"
              }`}
              aria-label="Bahasa Indonesia"
              aria-pressed={language === "id"}
            >
              ID
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 ${
                language === "en"
                  ? "bg-[#171717] text-white dark:bg-[#F3F2EE] dark:text-[#0D0E12]"
                  : "text-[#6B6A65] hover:text-[#171717] dark:text-[#A6A5A0] dark:hover:text-[#F3F2EE]"
              }`}
              aria-label="English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#6B6A65] transition-all duration-300 hover:border-[#4F46A5] hover:text-[#4F46A5] dark:border-white/10 dark:text-[#A6A5A0] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
            aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
          >
            {darkMode ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#171717] transition-colors hover:border-[#4F46A5] hover:text-[#4F46A5] md:hidden dark:border-white/10 dark:text-[#F3F2EE] dark:hover:border-[#8B87E8] dark:hover:text-[#8B87E8]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-[#F8F7F4] transition-[max-height,opacity] duration-300 ease-out md:hidden dark:border-white/5 dark:bg-[#0D0E12] ${
          menuOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[#4F46A5]/[0.07] text-[#4F46A5] dark:bg-[#8B87E8]/10 dark:text-[#8B87E8]"
                    : "text-[#6B6A65] hover:bg-black/3 hover:text-[#171717] dark:text-[#A6A5A0] dark:hover:bg-white/4 dark:hover:text-[#F3F2EE]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Contact — samakan dengan nav link lain di mobile */}
          <Link
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center rounded-lg px-3 py-2.5 text-sm text-[#6B6A65] transition-colors hover:bg-black/3 hover:text-[#171717] dark:text-[#A6A5A0] dark:hover:bg-white/4 dark:hover:text-[#F3F2EE]"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
