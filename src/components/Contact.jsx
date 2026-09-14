import { motion } from "motion/react"
import { profile } from "../data/profile"
import { SectionHeading } from "./About"

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: `@${profile.githubUsername}`, href: profile.github },
  { label: "LinkedIn", value: "kushagra-agarwal", href: profile.linkedin },
  { label: "Medium", value: "@kushagradpr2005", href: profile.medium },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <SectionHeading index="06" title="contact" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-text sm:text-4xl">Let's build something.</h2>
        <p className="mt-4 text-base leading-relaxed text-text-muted">
          Open to full-time roles and internships. If you're hiring for a full-stack or backend
          position, or just want to talk shop about async job queues, I'd love to hear from you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
        >
          {profile.email}
        </a>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="rounded-lg border border-border p-4 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs text-text-dim">{link.label}</p>
              <p className="mt-1 text-sm text-text truncate">{link.value}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
