export default function CodeSnippet({ file, code }) {
  const lines = code.split("\n")

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-bg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border-hover" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-hover" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-hover" />
        <span className="ml-2 font-mono text-xs text-text-dim truncate">{file}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:text-[13px]">
        <code className="font-mono">
          {lines.map((line, i) => {
            const commentIdx = line.indexOf("//")
            const isFullComment = line.trim().startsWith("//")
            return (
              <div key={i} className="whitespace-pre">
                {isFullComment ? (
                  <span className="text-text-dim">{line}</span>
                ) : commentIdx !== -1 ? (
                  <>
                    <span className="text-text-muted">{line.slice(0, commentIdx)}</span>
                    <span className="text-text-dim">{line.slice(commentIdx)}</span>
                  </>
                ) : (
                  <span className="text-text-muted">{line}</span>
                )}
              </div>
            )
          })}
        </code>
      </pre>
    </div>
  )
}
