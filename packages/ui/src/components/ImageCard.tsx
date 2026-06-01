/**
 * CarloOS ImageCard — editorial image-with-caption block.
 *
 * Uses next/image for optimization and lazy loading. Renders a proper
 * <figure> + <figcaption> for accessibility & schema. Built-in skeleton
 * loader appears while the image is loading.
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
   * When set, the credit text becomes a link to this URL — typically the
   * source page where photographer attribution lives (Unsplash photo page,
   * Wikimedia file page, etc.). Required by QC §1 when the credit string
   * does not name the photographer directly.
   */
  creditUrl?: string
  aspect?: ImageCardAspect
  variant?: ImageCardVariant
  /** Optional priority load (hero images above the fold) */
  priority?: boolean
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
}: ImageCardProps) {
  const [loaded, setLoaded] = useState(false)

  const containerClass = [
    'my-8',
    variant === 'wide' && 'lg:-mx-12',
    variant === 'full-bleed' && 'relative w-screen left-1/2 -ml-[50vw]',
  ]
    .filter(Boolean)
    .join(' ')

  const wrapperStyle: CSSProperties = {
    position: 'relative',
    aspectRatio: ASPECT_RATIO[aspect],
    overflow: 'hidden',
    borderRadius: variant === 'full-bleed' ? 0 : 8,
    backgroundColor: 'var(--brand-surface)',
  }

  return (
    <figure className={containerClass}>
      <div style={wrapperStyle}>
        {/* Skeleton */}
        {!loaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-pulse"
            style={{
              background:
                'linear-gradient(90deg, var(--brand-surface) 0%, var(--brand-border) 50%, var(--brand-surface) 100%)',
            }}
          />
        )}
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
          onLoadingComplete={() => setLoaded(true)}
          style={{
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 240ms ease-out',
          }}
        />
      </div>

      {(caption || credit) && (
        <figcaption className="mt-3 text-sm italic text-brand-text-mid leading-snug px-1">
          {caption}
          {caption && credit && ' '}
          {credit && (
            <span className="not-italic text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light ml-1">
              {creditUrl ? (
                <a
                  href={creditUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-brand-text-light hover:text-brand-primary no-underline hover:underline"
                >
                  {credit}
                </a>
              ) : (
                credit
              )}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
