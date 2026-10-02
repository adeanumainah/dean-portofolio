import { useEffect, useRef, useState } from "react"

function FloatingContact({ t }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  const channels = [
    {
      id: "email",
      label: t?.floating?.email ?? "Email",
      href: "mailto:deanumainah.kv16@gmail.com",
      bg: "bg-[#4F46A5] hover:bg-[#3F368F] dark:bg-[#8B87E8] dark:hover:bg-[#7B77D8]",
      icon: (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      label: t?.floating?.whatsapp ?? "WhatsApp",
      href: "https://wa.me/6282320216812?text=Hai%20Dean%2C%20saya%20tertarik%20untuk%20berkolaborasi.",
      bg: "bg-[#25D366] hover:bg-[#1FAA53]",
      icon: (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      ),
    },
  ]

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-80 flex flex-col items-end gap-3 md:bottom-8 md:right-8"
    >
      {channels.map((ch, i) => (
        <a
          key={ch.id}
          href={ch.href}
          target={ch.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={ch.label}
          className={`group flex items-center gap-3 transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-90 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
        >
          <span className="pointer-events-none rounded-full bg-[#171717] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-[#F3F2EE] dark:text-[#0D0E12]">
            {ch.label}
          </span>

          {/* Icon button */}
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-105 ${ch.bg}`}
          >
            {ch.icon}
          </span>
        </a>
      ))}

      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close" : "Contact"}
        aria-expanded={open}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#171717] text-white shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-[#4F46A5] dark:bg-[#F3F2EE] dark:text-[#0D0E12] dark:hover:bg-[#8B87E8]"
      >
        {/* Pulse ring — hanya saat closed */}
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#4F46A5]/30 dark:bg-[#8B87E8]/30" />
        )}

        {/* Chat icon / X — rotate saat open */}
        <span
          className={`relative transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          {open ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  )
}

export default FloatingContact