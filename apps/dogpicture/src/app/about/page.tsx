/**
 * /about — "Why we do this" page. Short, honest.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'Why we do this',
  description: 'A short note on why DogPicture.com exists.',
  path: '/about',
  type: 'website',
})

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-container-sm sm:px-10 py-16">
      <nav className="text-xs text-brand-text-light mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          ← Home
        </Link>
      </nav>
      <h1 className="font-display font-black text-brand-text-dark text-3xl tracking-tight mb-3">
        Why we do this
      </h1>
      <p className="text-sm text-brand-text-light mb-10">A short note from the team.</p>

      <div className="carloOS-article">
        <p>
          Dogs are short stories. They are with you for ten, maybe fourteen years if you&apos;re lucky.
          They are in the corner of every photo on your phone and not in the frame of any of them.
        </p>
        <p>
          We built DogPicture.com because we wanted a way to take the dog from the corner of the
          photo and put them in the center of a thing — a canvas on the wall, a mug on the desk, a
          blanket on the couch. Something you actually keep.
        </p>
        <h2>How we think about it</h2>
        <p>
          The AI does the painting. The print shop does the printing. We do the part in between:
          turning a phone snapshot into something that holds up at 16 inches, getting the style
          right so your dog is recognizable, and shipping it without you having to think about it.
        </p>
        <p>
          We charge $9 for the digital file because that is what it costs to run the model plus a
          small margin. We charge more for canvases and mugs because the print shop charges us
          more. No subscriptions, no upsells, no funny business. Pay once, own it forever.
        </p>
        <h2>The portfolio</h2>
        <p>
          DogPicture.com is part of the CarloOS portfolio alongside <a href="https://dog.com">Dog.com</a>,{' '}
          <a href="https://vets.co">Vets.co</a>, <a href="https://petfood.com">PetFood.com</a>, and other
          owner-first resources. If you want to compare pet insurance, that lives on dog.com. If you
          want to find a vet, that lives on vets.co. Each tool does one job well.
        </p>
        <h2>Get in touch</h2>
        <p>
          Email us at <a href="mailto:hello@dogpicture.com">hello@dogpicture.com</a>. We answer everything.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm flex-wrap">
        <Link href="/legal/refund-policy" className="text-brand-primary hover:underline">
          Refund Policy
        </Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">
          Terms
        </Link>
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">
          Privacy
        </Link>
      </div>
    </div>
  )
}
