/**
 * Capture forms stay off until an operator turns the flag on and an inbox exists.
 * Production leaves the flags unset, so visitors never see a live form.
 * A POST with no inbox returns ok:false and HTTP 200, never 503.
 * A flag that is on still uses the honest-fail path when the upstream rejects the note.
 */

function read(env: NodeJS.ProcessEnv, key: string): string | undefined {
  if (env !== process.env) {
    const value = env[key]
    return typeof value === 'string' ? value : undefined
  }
  if (key === 'NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE') return process.env.NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE
  if (key === 'NEXT_PUBLIC_DOG_INQUIRE_CAPTURE') return process.env.NEXT_PUBLIC_DOG_INQUIRE_CAPTURE
  if (key === 'NEXT_PUBLIC_VETS_INQUIRE_CAPTURE') return process.env.NEXT_PUBLIC_VETS_INQUIRE_CAPTURE
  if (key === 'NEXT_PUBLIC_INQUIRE_EMAIL') return process.env.NEXT_PUBLIC_INQUIRE_EMAIL
  if (key === 'INQUIRE_EMAIL') return process.env.INQUIRE_EMAIL
  return undefined
}

export function captureInbox(env: NodeJS.ProcessEnv = process.env): string | undefined {
  const inbox = read(env, 'INQUIRE_EMAIL') || read(env, 'NEXT_PUBLIC_INQUIRE_EMAIL')
  return inbox && inbox.length > 0 ? inbox : undefined
}

/** Client-safe: both values are NEXT_PUBLIC, so server HTML and the browser match. */
export function fishSubscribeFormVisible(env: NodeJS.ProcessEnv = process.env): boolean {
  return read(env, 'NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE') === 'true'
    && Boolean(read(env, 'NEXT_PUBLIC_INQUIRE_EMAIL'))
}

/** Server delivery: the public flag plus either inbox. */
export function fishSubscribeDeliveryEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return read(env, 'NEXT_PUBLIC_FISH_SUBSCRIBE_CAPTURE') === 'true' && Boolean(captureInbox(env))
}

export function dogInquireCaptureEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return read(env, 'NEXT_PUBLIC_DOG_INQUIRE_CAPTURE') === 'true' && Boolean(captureInbox(env))
}

export function vetsInquireCaptureEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return read(env, 'NEXT_PUBLIC_VETS_INQUIRE_CAPTURE') === 'true' && Boolean(captureInbox(env))
}

/** Public values only, so a client default matches its server render. */
export function dogInquireFormVisible(env: NodeJS.ProcessEnv = process.env): boolean {
  return read(env, 'NEXT_PUBLIC_DOG_INQUIRE_CAPTURE') === 'true' && Boolean(read(env, 'NEXT_PUBLIC_INQUIRE_EMAIL'))
}

export function vetsInquireFormVisible(env: NodeJS.ProcessEnv = process.env): boolean {
  return read(env, 'NEXT_PUBLIC_VETS_INQUIRE_CAPTURE') === 'true' && Boolean(read(env, 'NEXT_PUBLIC_INQUIRE_EMAIL'))
}

export function inquireCaptureEnabled(siteHost: string, env: NodeJS.ProcessEnv = process.env): boolean {
  if (siteHost === 'dog.com') return dogInquireCaptureEnabled(env)
  if (siteHost === 'vets.co') return vetsInquireCaptureEnabled(env)
  return true
}

const PAUSED_EMAIL_SITES = new Set(['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com'])

/**
 * What an EmailCapture block renders while FormSubmit is down.
 * Under-hero sources on the five earning sites stay an on-page magnet.
 * Fish subscribe stays a form only when its flag and inbox are both set.
 */
export function emailCaptureSurface(opts: {
  siteId: string
  source: string
  addressOnly?: boolean
  captureOpen?: boolean
  hasResource?: boolean
  hasChecklist?: boolean
  emailCaptureEnabled?: boolean
  guideAddress?: boolean
  env?: NodeJS.ProcessEnv
}): 'hidden' | 'magnet' | 'form' | 'checklist' {
  const underHero = opts.source.endsWith('under-hero')
  const enabled = Boolean(opts.addressOnly) || underHero || opts.emailCaptureEnabled === true
  if (!enabled) return 'hidden'
  const fishOpen = opts.siteId === 'fish-com' && !opts.addressOnly
    ? (opts.captureOpen ?? fishSubscribeFormVisible(opts.env))
    : false
  if (PAUSED_EMAIL_SITES.has(opts.siteId) && !opts.addressOnly && !fishOpen) {
    return opts.hasResource ? 'magnet' : 'hidden'
  }
  if (opts.addressOnly && !opts.guideAddress) {
    return opts.hasChecklist ? 'checklist' : 'hidden'
  }
  return 'form'
}

/** Server inquire screens. Fish, horses, and ferret stay closed while FormSubmit is down. */
export function inquireOfferOpen(siteName: string, env: NodeJS.ProcessEnv = process.env): boolean {
  if (siteName === 'Dog.com') return dogInquireCaptureEnabled(env)
  if (siteName === 'Vets.co') return vetsInquireCaptureEnabled(env)
  if (siteName === 'Fish.com' || siteName === 'Horses.com' || siteName === 'Ferret.com') return false
  return true
}

/** Client default when a page does not pass `open`. Dog and vets use the public flag. */
export function inquireFormDefaultOpen(siteName: string, env: NodeJS.ProcessEnv = process.env): boolean {
  if (siteName === 'Dog.com') return dogInquireFormVisible(env)
  if (siteName === 'Vets.co') return vetsInquireFormVisible(env)
  if (siteName === 'Fish.com' || siteName === 'Horses.com' || siteName === 'Ferret.com') return false
  return true
}
