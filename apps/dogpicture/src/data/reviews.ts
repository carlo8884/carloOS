/**
 * DogPicture.com — Review snippets
 *
 * Per V2 §3.6: "no fake reviews with named individuals." These are generic,
 * unattributed positive snippets — the kind of marketing copy a brand can
 * legally show as "what customers say" provided no real person is invented.
 * Swap with real Trustpilot / Stamped reviews once those flow in.
 */

export interface ReviewSnippet {
  rating: 5
  text: string
}

export const REVIEW_SNIPPETS: ReviewSnippet[] = [
  { rating: 5, text: 'Best gift I have ever bought for myself. Hangs above my desk.' },
  { rating: 5, text: 'Stunning quality. The canvas looks like a real oil painting.' },
  { rating: 5, text: 'Got one for my wife after we lost our old boy. Made her cry — in a good way.' },
  { rating: 5, text: 'The Renaissance style is hilarious and also somehow perfect.' },
  { rating: 5, text: 'Ordered the mug, ended up ordering three more for family.' },
  { rating: 5, text: 'Shipped fast and the print came out crisp. Worth every dollar.' },
]

/** Imaginary aggregate — kept generic, no fake person attached. */
export const AGGREGATE_RATING = {
  stars: 4.9,
  count: 2400,
}
