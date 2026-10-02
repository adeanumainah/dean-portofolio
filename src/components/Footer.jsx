function Footer() {
  return (
    <footer className="border-t border-[#E7E2D6] bg-[#F7F5EF] dark:border-white/10 dark:bg-[#0B0F14]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row dark:text-slate-500">
        <p>© {new Date().getFullYear()} Dean Umainah Zakaria</p>
        <p className="font-mono text-xs">Bandung, Indonesia</p>
      </div>
    </footer>
  )
}

export default Footer
