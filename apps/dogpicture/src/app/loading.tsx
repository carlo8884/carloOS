export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-brand-border border-t-brand-primary rounded-full animate-spin" />
        <div className="text-sm text-brand-text-light font-medium">Loading…</div>
      </div>
    </div>
  )
}
