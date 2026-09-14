import { useEffect, useState } from "react"
import { profile } from "../data/profile"

const SECTIONS = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "writing", label: "writing" },
  { id: "contact", label: "contact" },
]

export default function Nav() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 font-mono text-sm">
        <a href="#top" className="text-text hover:text-accent transition-colors">
          <span className="text-accent">~</span>/{profile.githubUsername}
        </a>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-6">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`transition-colors ${
                  active === s.id ? "text-accent" : "text-text-muted hover:text-text"
                }`}
              >
                ./{s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              download
              className="rounded border border-border-hover px-3 py-1.5 text-text-muted hover:border-accent hover:text-accent transition-colors"
            >
              resume.pdf
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-text-muted hover:text-accent px-2 py-1 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-text-muted hover:text-accent"
              >
                ./{s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resumeUrl} download className="block py-2 text-accent">
              ./resume.pdf
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
