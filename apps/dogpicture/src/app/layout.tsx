import type { Metadata } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400','700','900'], variable: '--font-fraunces', display: 'swap' })
const nunito = Nunito({ subsets: ['latin'], weight: ['300','400','600','700','800'], variable: '--font-nunito', display: 'swap' })

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'DogPicture.com — AI dog portraits — keepsakes for the dog you love',
  description: 'DogPicture.com — AI-generated dog portraits printed on canvas, mugs, posters. Self-serve POD.',
  path: '/',
  type: 'website',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}
