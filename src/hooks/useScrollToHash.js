import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [pathname, hash])
}