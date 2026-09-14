import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-hover sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-text-dim">{project.year} · {project.status}</p>
          <h3 className="mt-1 text-2xl font-bold text-text">{project.name}</h3>
          <p className="mt-1 font-mono text-sm text-accent">{project.tagline}</p>
        </div>
        <div className="flex gap-3 font-mono text-sm">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-border-hover px-3 py-1.5 text-text-muted hover:border-accent hover:text-accent transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted">{project.description}</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {project.impact.map((item, i) => (
          <div key={i}>
            <p className="font-mono text-lg font-bold text-accent sm:text-xl">{item.stat}</p>
            <p className="mt-0.5 text-xs leading-snug text-text-dim">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-6 font-mono text-xs text-text-dim hover:text-accent transition-colors"
      >
        {expanded ? "− hide details" : "+ engineering details"}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 overflow-hidden border-t border-border pt-4"
          >
            {project.details.map((d, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                <span className="mt-1 text-accent">▸</span>
                <span>{d}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
