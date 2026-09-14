import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 font-mono text-xs text-text-dim sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · built with React + Vite + Tailwind
        </p>
        <p>designed like a terminal, built like a product</p>
      </div>
    </footer>
  )
}
