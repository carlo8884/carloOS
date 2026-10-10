'use client'

import { createContext, useContext, type ReactNode } from 'react'

/**
 * Root layouts pass whether the Amazon Associates tag was set when the
 * server rendered the page. Shop buttons are client components, and a
 * direct AFF_AMAZON_TAG read is empty in the browser bundle, so hydration
 * was deleting the Associates line the server had just written.
 * null means this tree has no provider and the button may fall back.
 */
const AmazonEarnsContext = createContext<boolean | null>(null)

export function HopEarnsProvider({
  amazon,
  children,
}: {
  amazon: boolean
  children: ReactNode
}) {
  return <AmazonEarnsContext.Provider value={amazon}>{children}</AmazonEarnsContext.Provider>
}

export function useAmazonEarns(): boolean | null {
  return useContext(AmazonEarnsContext)
}
