'use client'

/**
 * CarloOS SearchBar Component
 * Client component — queries /api/search for instant results.
 * Used in Nav and as standalone search page component.
 *
 * Features:
 * - Debounced search (300ms)
 * - Keyboard navigation (arrows, enter, escape)
 * - Result type badges (article, review, breed, guide)
 * - Click outside to close
 * - Mobile-optimized
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { SiteId } from '@carloOS/config'

interface SearchResult {
  title: string
  excerpt: string
  path: string
  type: 'article' | 'review' | 'breed' | 'guide' | 'faq' | 'location'
}

interface SearchBarProps {
  siteId: SiteId
  placeholder?: string
  className?: string
  /** If true, renders as a full-width search bar (not the compact nav version) */
  fullWidth?: boolean
}

const TYPE_LABELS: Record<string, string> = {
  article: 'Article',
  review: 'Review',
  breed: 'Breed',
  guide: 'Guide',
  faq: 'FAQ',
  location: 'Find',
}

const TYPE_COLORS: Record<string, string> = {
  article: '#E8622A',
  review: '#2A6A3A',
  breed: '#0A8A7A',
  guide: '#A07840',
  faq: '#0E6B8A',
  location: '#7A3AAA',
}

export function SearchBar({ siteId, placeholder = 'Search…', className = '', fullWidth = false }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()
  const router = useRouter()

  // Debounced search
  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([])
      setOpen(false)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&site=${siteId}&limit=6`)
      const data = await res.json()
      setResults(data.results ?? [])
      setOpen(true)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [siteId])

  useEffect(() => {
    clearTimeout(debounceRef.current)
    if (query.length < 2) {
      setResults([])
      setOpen(false)
      setActiveIndex(-1)
      return
    }
    debounceRef.current = setTimeout(() => search(query), 300)
    return () => clearTimeout(debounceRef.current)
  }, [query, search])

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard nav
  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) {
      if (e.key === 'Enter' && query.length >= 2) {
        router.push(`/search?q=${encodeURIComponent(query)}`)
        setOpen(false)
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex(i => Math.min(i + 1, results.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex(i => Math.max(i - 1, -1))
        break
      case 'Enter':
        e.preventDefault()
        if (activeIndex >= 0 && results[activeIndex]) {
          router.push(results[activeIndex].path)
          setOpen(false)
          setQuery('')
        } else {
          router.push(`/search?q=${encodeURIComponent(query)}`)
          setOpen(false)
        }
        break
      case 'Escape':
        setOpen(false)
        setActiveIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  function handleSelect(result: SearchResult) {
    router.push(result.path)
    setOpen(false)
    setQuery('')
    setActiveIndex(-1)
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${fullWidth ? 'w-full' : 'w-64 lg:w-80'} ${className}`}
    >
      {/* Input */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: 'var(--brand-text-light)', width: '16px', height: '16px' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && results.length > 0 && setOpen(true)}
          placeholder={placeholder}
          className={`w-full bg-brand-surface border border-brand-border rounded-lg text-sm pl-9 pr-4 py-2.5 text-brand-text-dark placeholder-brand-text-light outline-none focus:border-brand-primary transition-colors ${fullWidth ? 'py-3.5 text-base pl-11' : ''}`}
          aria-label="Search"
          aria-expanded={open}
          aria-haspopup="listbox"
          role="combobox"
          autoComplete="off"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-brand-border border-t-brand-primary rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Dropdown */}
      {open && results.length > 0 && (
        <div
          role="listbox"
          className="absolute top-full mt-1 left-0 right-0 bg-brand-white border border-brand-border rounded-xl shadow-card-hover z-50 overflow-hidden"
          style={{ maxHeight: '400px', overflowY: 'auto' }}
        >
          {results.map((result, idx) => (
            <button
              key={result.path}
              role="option"
              aria-selected={idx === activeIndex}
              onClick={() => handleSelect(result)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 border-b border-brand-border last:border-0 transition-colors cursor-pointer ${idx === activeIndex ? 'bg-brand-primary-pale' : 'bg-brand-white hover:bg-brand-surface'}`}
            >
              {/* Type badge */}
              <span
                className="text-2xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                style={{
                  background: `${TYPE_COLORS[result.type] ?? '#888'}18`,
                  color: TYPE_COLORS[result.type] ?? '#888',
                }}
              >
                {TYPE_LABELS[result.type] ?? result.type}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-brand-dark leading-tight truncate">{result.title}</div>
                {result.excerpt && (
                  <div className="text-xs text-brand-text-light mt-0.5 line-clamp-1">{result.excerpt}</div>
                )}
              </div>
            </button>
          ))}

          {/* View all */}
          <button
            onClick={() => {
              router.push(`/search?q=${encodeURIComponent(query)}`)
              setOpen(false)
            }}
            className="w-full text-center py-2.5 text-xs font-bold text-brand-primary bg-brand-surface hover:bg-brand-primary-pale border-t border-brand-border transition-colors cursor-pointer"
          >
            View all results for &ldquo;{query}&rdquo; →
          </button>
        </div>
      )}

      {/* No results */}
      {open && !loading && results.length === 0 && query.length >= 2 && (
        <div className="absolute top-full mt-1 left-0 right-0 bg-brand-white border border-brand-border rounded-xl shadow-card-hover z-50 px-4 py-5 text-center">
          <div className="text-sm text-brand-text-light">No results for &ldquo;{query}&rdquo;</div>
          <div className="text-xs text-brand-text-light mt-1">Try a different search term</div>
        </div>
      )}
    </div>
  )
}
