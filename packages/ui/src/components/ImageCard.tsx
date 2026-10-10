/**
 * CarloOS ImageCard — editorial image-with-caption block.
 *
 * Uses next/image for optimization and lazy loading. Renders a proper
 * <figure> + <figcaption> for accessibility & schema. The aspect-ratio box
 * reserves space before the bytes arrive. The image paints at full opacity
 * so the largest paint is not held behind a fade.
 *
 * Variants:
 *  - inline     : standard article-width figure
 *  - wide       : breaks the article column slightly for visual emphasis
 *  - full-bleed : edge-to-edge (for hero use beyond article gutters)
 */

'use client'

import Image from 'next/image'
import { useState, type CSSProperties } from 'react'

export type ImageCardAspect = '4:3' | '16:9' | '1:1' | '3:4'
export type ImageCardVariant = 'inline' | 'wide' | 'full-bleed'

export interface ImageCardProps {
  src: string
  alt: string
  caption?: string
  credit?: string
  /**
   * Source page for the photographer credit (Unsplash photo page, etc.).
   * Exposed as the credit's `title` — never as a nested `<a>` (StockImage
   * is often inside next/link; a>a blanks Dog.com on hydration).
   * Attribution text itself stays visible (QC §1 / Unsplash TOS).
   */
  creditUrl?: string
  aspect?: ImageCardAspect
  variant?: ImageCardVariant
  /** Optional priority load (hero images above the fold) */
  priority?: boolean
  /**
   * Explicit pixel dimensions. When both are set, the image is not `fill`:
   * width and height attributes reserve the box (no layout shift) and the
   * request stays lazy unless `priority` is set.
   */
  width?: number
  height?: number
  /**
   * When true, the credit is NOT rendered in the <figcaption> below the
   * image. Instead it renders as a tiny absolutely-positioned overlay in
   * the image's bottom-right corner — unobtrusive but still present and
   * clickable (Unsplash/Pexels TOS + QC §1: attribution must never be
   * stripped, only made visually subtle). For PRIME visual areas (hero,
   * image-backed cards). Default false → identical legacy output.
   */
  subtleCredit?: boolean
}

const ASPECT_RATIO: Record<ImageCardAspect, string> = {
  '4:3': '4 / 3',
  '16:9': '16 / 9',
  '1:1': '1 / 1',
  '3:4': '3 / 4',
}

export function ImageCard({
  src,
  alt,
  caption,
  credit,
  creditUrl,
  aspect = '16:9',
  variant = 'inline',
  priority = false,
  subtleCredit = false,
  width,
  height,
}: ImageCardProps) {
  const [errored, setErrored] = useState(false)
  const intrinsic = typeof width === 'number' && typeof height === 'number' && width > 0 && height > 0

  const containerClass = [
    'my-8',
    variant === 'wide' && 'lg:-mx-12',
    variant === 'full-bleed' && 'relative w-screen left-1/2 -ml-[50vw]',
  ]
    .filter(Boolean)
    .join(' ')

  const wrapperStyle: CSSProperties = intrinsic
    ? {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: variant === 'full-bleed' ? 0 : 8,
        backgroundColor: 'var(--brand-surface)',
      }
    : {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        aspectRatio: ASPECT_RATIO[aspect],
        overflow: 'hidden',
        borderRadius: variant === 'full-bleed' ? 0 : 8,
        backgroundColor: 'var(--brand-surface)',
      }

  return (
    <figure className={containerClass}>
      <div style={wrapperStyle}>
        {intrinsic ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 768px) 640px, 100vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setErrored(true)}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: errored ? 0 : 1,
            }}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              variant === 'full-bleed'
                ? '100vw'
                : variant === 'wide'
                  ? '(min-width: 1024px) 900px, 100vw'
                  : '(min-width: 768px) 720px, 100vw'
            }
            priority={priority}
            onError={() => setErrored(true)}
            style={{
              objectFit: 'cover',
              opacity: errored ? 0 : 1,
            }}
          />
        )}

        {/* Broken-image fallback. A dead or blocked image URL would otherwise
            leave a raw blank surface box (the manifest occasionally carries a
            removed Unsplash URL). Render an INTENTIONAL soft brand gradient so a
            broken slot still looks designed rather than empty. */}
        {errored && (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, var(--brand-surface), var(--brand-primary-pale))',
            }}
          />
        )}

        {/* Subtle-credit overlay — photographer name stays visible (QC §1).
            Never emit an <a> from ImageCard: StockImage is often inside
            next/link, and a>a is invalid HTML. The browser "repairs" the
            outer anchor before React hydrates, which is React #418/#422
            plus an insertBefore/removeChild storm that can blank the tree.
            Source URL stays on title when present. */}
        {subtleCredit && credit && (
          <span
            className="absolute bottom-1.5 right-2 text-[10px] leading-none text-white/55 z-10"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
            title={creditUrl || undefined}
          >
            {credit}
          </span>
        )}
      </div>

      {/* Caption (+ credit when NOT subtle) below the image. When subtleCredit
          is on, the credit moves to the overlay above and only the caption (if
          any) renders here — keeping legacy behavior identical when false.
          Credit text is never an <a> (same reason as the overlay). */}
      {(caption || (credit && !subtleCredit)) && (
        <figcaption className="mt-3 text-sm italic text-brand-text-mid leading-snug px-1">
          {caption}
          {caption && credit && !subtleCredit && ' '}
          {credit && !subtleCredit && (
            <span
              className="not-italic text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light ml-1"
              title={creditUrl || undefined}
            >
              {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
