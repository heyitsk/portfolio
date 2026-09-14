import { motion } from "motion/react"
import { profile, education } from "../data/profile"
import GithubContributions from "./GithubContributions"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" title="about" />

      <div className="grid gap-12 md:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 text-lg leading-relaxed text-text-muted"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 rounded-lg border border-border bg-surface p-6 font-mono text-sm"
        >
          <p className="mb-4 text-accent">education.json</p>
          <dl className="space-y-3 text-text-muted">
            <div>
              <dt className="text-text-dim">school</dt>
              <dd className="text-text">{education.school}</dd>
            </div>
            <div>
              <dt className="text-text-dim">degree</dt>
              <dd className="text-text">{education.degree}</dd>
            </div>
            <div>
              <dt className="text-text-dim">cgpa</dt>
              <dd className="text-accent">{education.cgpa}</dd>
            </div>
            <div>
              <dt className="text-text-dim">period</dt>
              <dd>{education.period}</dd>
            </div>
            <div>
              <dt className="text-text-dim">location</dt>
              <dd>{education.location}</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <div className="mt-12">
        <GithubContributions />
      </div>
    </section>
  )
}

export function SectionHeading({ index, title }) {
  return (
    <div className="mb-10 flex items-center gap-3 font-mono text-sm text-text-dim">
      <span>{index}</span>
      <span className="h-px flex-1 max-w-8 bg-border-hover" />
      <span className="text-accent">./{title}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
