import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { affiliateClickWithAiSource, matchAiSource, resolveAiSource } from './ai-referral.ts'
import { trackEvent } from './track-event.ts'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../..')

test('matchAiSource names each AI answer surface and ignores ordinary search', () => {
  const cases: Array<[string, string]> = [
    ['https://chatgpt.com/c/abc', 'chatgpt.com'],
    ['https://www.chatgpt.com/', 'chatgpt.com'],
    ['https://chat.openai.com/chat', 'chat.openai.com'],
    ['https://www.perplexity.ai/search/ferret-cage', 'perplexity.ai'],
    ['https://gemini.google.com/app', 'gemini.google.com'],
    ['https://copilot.microsoft.com/chats/1', 'copilot.microsoft.com'],
    ['https://claude.ai/chat/abc', 'claude.ai'],
    ['https://www.bing.com/chat?q=ferret+litter', 'bing.com/chat'],
    ['https://bing.com/chat', 'bing.com/chat'],
  ]
  for (const [referrer, id] of cases) {
    assert.equal(matchAiSource({ referrer }), id, referrer)
    assert.equal(matchAiSource({ utmSource: id }), id, id)
  }
  assert.equal(matchAiSource({ utmSource: 'https://www.Perplexity.ai/search' }), 'perplexity.ai')
  assert.equal(matchAiSource({ referrer: 'https://www.bing.com/search?q=cages' }), null)
  assert.equal(matchAiSource({ utmSource: 'bing.com' }), null)
  assert.equal(matchAiSource({ utmSource: 'bing.com/search' }), null)
  assert.equal(matchAiSource({ referrer: 'https://www.google.com/search?q=trupanion' }), null)
  assert.equal(matchAiSource({ utmSource: 'newsletter' }), null)
  assert.equal(matchAiSource({}), null)
  assert.equal(matchAiSource({ referrer: 'not a url', utmSource: '' }), null)
})

test('a stored ai_source survives a later same-site referrer', () => {
  assert.equal(
    resolveAiSource({
      referrer: 'https://vets.co/reviews/best-pet-insurance',
      stored: 'chatgpt.com',
    }),
    'chatgpt.com',
  )
  assert.equal(
    resolveAiSource({
      referrer: 'https://www.google.com/',
      utmSource: 'claude.ai',
      stored: 'chatgpt.com',
    }),
    'claude.ai',
  )
  assert.equal(resolveAiSource({ referrer: 'https://ferret.com/', stored: 'newsletter' }), null)
})

test('affiliate_click gains ai_source only on vets-co and ferret-com', () => {
  const base = { site: 'vets-co', page: '/reviews/trupanion-vs-embrace-guide', partner: 'trupanion' }
  const vets = affiliateClickWithAiSource('vets-co', base, 'chatgpt.com')
  assert.equal(vets.ai_source, 'chatgpt.com')
  assert.equal(vets.partner, 'trupanion')
  const ferret = affiliateClickWithAiSource('ferret-com', base, 'perplexity.ai')
  assert.equal(ferret.ai_source, 'perplexity.ai')
  const dog = affiliateClickWithAiSource('dog-com', base, 'chatgpt.com')
  assert.equal('ai_source' in dog, false)
  assert.equal(affiliateClickWithAiSource('vets-co', base, null), base)
  assert.equal(affiliateClickWithAiSource('horses-com', base, 'claude.ai'), base)
})

test('ai_referral is a no-op when gtag is absent', () => {
  assert.equal(typeof window, 'undefined')
  assert.doesNotThrow(() => trackEvent('ai_referral', { ai_source: 'chatgpt.com' }))
})

test('the tracker sends ai_referral and does not call Vercel analytics', () => {
  const tracker = readFileSync(join(ROOT, 'src/components/AiReferralTracker.tsx'), 'utf8')
  const listener = readFileSync(join(ROOT, 'src/components/AffiliateClickListener.tsx'), 'utf8')
  assert.match(tracker, /trackEvent\(\s*'ai_referral'/)
  assert.match(tracker, /if\s*\(\s*!enabled\s*\)\s*return/)
  assert.doesNotMatch(tracker, /@vercel\/analytics/)
  assert.match(listener, /affiliateClickWithAiSource/)
  assert.match(listener, /trackEvent\('affiliate_click',\s*affiliateClickWithAiSource/)
})
