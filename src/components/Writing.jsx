import { motion } from "motion/react"
import { articles, writingIntro } from "../data/writing"
import { profile } from "../data/profile"
import { SectionHeading } from "./About"

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <SectionHeading index="05" title="writing" />

      <p className="mb-10 max-w-2xl text-base leading-relaxed text-text-muted">{writingIntro}</p>

      <div className="grid gap-4 sm:grid-cols-3">
        {articles.map((article, i) => (
          <motion.a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <p className="mb-3 font-mono text-xs text-text-dim">{article.series}</p>
            <h3 className="text-base font-semibold leading-snug text-text group-hover:text-accent transition-colors">
              {article.title}
            </h3>
            <p className="mt-4 font-mono text-xs text-text-dim group-hover:text-accent transition-colors">
              Read on Medium ↗
            </p>
          </motion.a>
        ))}
      </div>

      <a
        href={profile.medium}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block font-mono text-sm text-text-muted hover:text-accent transition-colors"
      >
        → all posts on Medium
      </a>
    </section>
  )
}
