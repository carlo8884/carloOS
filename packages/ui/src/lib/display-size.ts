/**
 * Explicit width and height for a below-the-fold photo.
 * The attributes keep the aspect ratio so the slot does not shift.
 * Width is capped so the reserved box is not a multi-thousand-pixel hint;
 * next/image still fetches a smaller AVIF or WebP from `sizes`.
 */
export function displaySize(
  width: number,
  height: number,
  maxWidth = 1200,
): { width: number; height: number } {
  const w = Math.round(width)
  const h = Math.round(height)
  if (w <= maxWidth) return { width: w, height: h }
  return { width: maxWidth, height: Math.max(1, Math.round((h / w) * maxWidth)) }
}
