/**
 * Capture forms stay off until an operator turns the flag on and an inbox exists.
 * Production leaves the flags unset, so visitors never see a form that 502s or 503s.
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
