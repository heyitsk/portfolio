import { motion } from "motion/react"
import { profile } from "../data/profile"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 pb-24 pt-20 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-border-hover bg-surface font-mono text-xl font-bold text-accent"
        >
          {profile.initials}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 font-mono text-sm text-accent"
        >
          hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl font-bold tracking-tight text-text sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 font-mono text-xl text-text-muted sm:text-2xl"
        >
          {profile.tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-muted"
        >
          {profile.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4 font-mono text-sm"
        >
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border-hover px-5 py-2.5 text-text hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
