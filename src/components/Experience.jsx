import { motion } from "motion/react"
import { experience } from "../data/experience"
import { SectionHeading } from "./About"

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <SectionHeading index="03" title="experience" />

      <div className="space-y-10">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 border-l-2 border-border pl-6 md:grid-cols-4 md:gap-8"
          >
            <div className="md:col-span-1">
              <p className="font-mono text-sm text-accent">{job.period}</p>
              <p className="mt-1 font-mono text-xs text-text-dim">{job.location}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-text">{job.role}</h3>
              <p className="mb-4 font-mono text-sm text-text-muted">
                {job.org} · {job.orgSub}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                    <span className="mt-1 text-accent">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
