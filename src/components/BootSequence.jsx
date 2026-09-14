import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { profile } from "../data/profile"

const LINES = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: profile.name.toLowerCase().replace(/\s+/g, "-") },
  { type: "cmd", text: "cat role.txt" },
  { type: "out", text: profile.tagline },
  { type: "cmd", text: "git log --oneline -4" },
  { type: "out", text: "a3f21c9 feat(gagandrishti): AES-256 IAM credential vaulting" },
  { type: "out", text: "7e91b02 feat(autocrawler): hybrid crawler framework detection" },
  { type: "out", text: "c48d310 feat(insightiq): NL-to-SQL via Gemini 2.5 Flash" },
  { type: "out", text: "0091ffa chore: mentor 6 junior devs, ship 4 event platforms" },
  { type: "cmd", text: "./launch-portfolio.sh" },
  { type: "out", text: "booting interface... done" },
  { type: "out", text: "rendering portfolio..." },
]

const LINE_DELAY = 220

export default function BootSequence({ onDone }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const timeouts = useRef([])

  useEffect(() => {
    LINES.forEach((_, i) => {
      const t = setTimeout(() => setVisibleCount(i + 1), i * LINE_DELAY)
      timeouts.current.push(t)
    })
    const done = setTimeout(() => setFinished(true), LINES.length * LINE_DELAY + 500)
    timeouts.current.push(done)

    const skip = (e) => {
      if (e.type === "keydown" || e.type === "click") finishNow()
    }
    window.addEventListener("keydown", skip)
    window.addEventListener("click", skip)

    return () => {
      timeouts.current.forEach(clearTimeout)
      window.removeEventListener("keydown", skip)
      window.removeEventListener("click", skip)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function finishNow() {
    timeouts.current.forEach(clearTimeout)
    setVisibleCount(LINES.length)
    setFinished(true)
  }

  useEffect(() => {
    if (finished) {
      const t = setTimeout(onDone, 450)
      return () => clearTimeout(t)
    }
  }, [finished, onDone])

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg px-6"
      >
        <div className="w-full max-w-xl font-mono text-sm sm:text-base">
          {LINES.slice(0, visibleCount).map((line, i) => (
            <div key={i} className="mb-1 leading-relaxed">
              {line.type === "cmd" ? (
                <span>
                  <span className="text-accent">kushagra@dev</span>
                  <span className="text-text-dim">:~$ </span>
                  <span className="text-text">{line.text}</span>
                </span>
              ) : (
                <span className="text-text-muted pl-4">{line.text}</span>
              )}
            </div>
          ))}
          <span className="inline-block h-4 w-2 bg-accent cursor-blink align-middle" />
        </div>
        <button
          onClick={finishNow}
          className="absolute bottom-8 right-8 font-mono text-xs text-text-dim hover:text-accent transition-colors"
        >
          skip →
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
