/** Shown when an inquiry was not delivered. Never a success sentence. */
export const INQUIRE_FALLBACK_HREF = '/disclosure'

export function inquireFailureLead(status: number): string {
  if (status === 503) {
    return 'This inbox is not connected yet, so the note was not sent. Write through the'
  }
  return 'The note was not sent. Try again in a little while, or write through the'
}
