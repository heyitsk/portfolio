import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { profile } from "../data/profile"

const LEVEL_COLORS = ["#151922", "#0e4429", "#1a7a4c", "#26a65b", "#34d399"]

export default function GithubContributions() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    let cancelled = false
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("bad response")
        return res.json()
      })
      .then((json) => {
        if (!cancelled) {
          setData(json)
          setStatus("ready")
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error")
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (status === "error") return null

  const weeks = data ? chunkIntoWeeks(data.contributions) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-surface p-6"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 font-mono text-sm">
        <p className="text-text-muted">
          <span className="text-accent">{data ? data.total.lastYear : "—"}</span> contributions in the last year
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-text-dim hover:text-accent transition-colors"
        >
          @{profile.githubUsername} →
        </a>
      </div>

      {status === "loading" && (
        <div className="h-28 animate-pulse rounded bg-surface-hover" />
      )}

      {weeks && (
        <div className="flex gap-[3px] overflow-x-auto pb-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) =>
                day ? (
                  <div
                    key={di}
                    title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                    className="h-[10px] w-[10px] rounded-[2px]"
                    style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                  />
                ) : (
                  <div key={di} className="h-[10px] w-[10px]" />
                )
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

function chunkIntoWeeks(contributions) {
  const first = new Date(contributions[0].date)
  const leadingBlanks = first.getDay()
  const padded = Array(leadingBlanks).fill(null).concat(contributions)
  const weeks = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }
  return weeks
}
