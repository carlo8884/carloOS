export default function LoadingPage() {
  return (
    <div className="px-container sm:px-container-sm py-20 max-w-content mx-auto text-center">
      <div className="inline-block animate-pulse text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
        Loading
      </div>
      <p className="text-base text-brand-text-light">Pulling the latest rankings...</p>
    </div>
  )
}
