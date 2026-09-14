export default function ArchitectureFlow({ steps }) {
  return (
    <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs">
      {steps.map((step, i) => (
        <div key={step} className="flex shrink-0 items-center gap-2">
          <span className="whitespace-nowrap rounded border border-border-hover bg-bg px-2.5 py-1.5 text-text-muted">
            {step}
          </span>
          {i < steps.length - 1 && <span className="text-accent">→</span>}
        </div>
      ))}
    </div>
  )
}
