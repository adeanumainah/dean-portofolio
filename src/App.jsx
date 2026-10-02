import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { useScrollToHash } from "./hooks/useScrollToHash"

import { translations } from "./data/translations"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Certificates from "./components/Certificate"
import Contact from "./components/Contact"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import CertificatesPage from "./pages/CertificatesPage"
import FloatingContact from "./components/FloatingContact"


function Home({ t, language }) {
  return (
    <>
      <Hero t={t} language={language} />
      <About t={t} />
      <Projects t={t} />
      <Certificates t={t} />
      <Contact t={t} />
    </>
  )
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState("en")

  const t = translations[language]

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  useScrollToHash() 

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-sans text-[#171717] transition-colors duration-300 dark:bg-[#0D0E12] dark:text-[#F3F2EE]">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home t={t} language={language} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/projects" element={<ProjectsPage t={t} />} />
          <Route path="/certificates" element={<CertificatesPage t={t} />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact t={t} />
    </div>
  )
}

/* ─── Root ─── */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App

