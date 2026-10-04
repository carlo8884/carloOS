/** Shown when an inquiry was not delivered. Never a success sentence. */
export const INQUIRE_FALLBACK_HREF = '/disclosure'

export function inquireFailureLead(status: number): string {
  if (status === 503) {
    return 'This inbox is not connected yet, so the note was not sent. Write through the'
  }
  if (status === 429) {
    return 'Too many tries from this network. The note was not sent. Wait a few minutes, or write through the'
  }
  if (status === 422) {
    return "That note doesn't look usable, so it was not sent. Write through the"
  }
  return 'The note was not sent. Try again in a little while, or write through the'
}
