import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { CONTENT_SECURITY_POLICY, SECURITY_HEADERS } from './security-headers.ts'

describe('security headers', () => {
  it('sets HSTS, nosniff, referrer, permissions, and CSP', () => {
    const names = SECURITY_HEADERS.map(([name]) => name)
    assert.deepEqual(names, [
      'Strict-Transport-Security',
      'X-Content-Type-Options',
      'Referrer-Policy',
      'Permissions-Policy',
      'Content-Security-Policy',
    ])
    const byName = Object.fromEntries(SECURITY_HEADERS)
    assert.match(byName['Strict-Transport-Security'], /max-age=\d+/)
    assert.equal(byName['X-Content-Type-Options'], 'nosniff')
    assert.equal(byName['Referrer-Policy'], 'strict-origin-when-cross-origin')
    assert.match(byName['Permissions-Policy'], /camera=\(\)/)
    assert.match(byName['Permissions-Policy'], /microphone=\(\)/)
    assert.match(byName['Permissions-Policy'], /geolocation=\(\)/)
  })

  it('lets GA4 and the font hosts load, and keeps inline scripts for hydration', () => {
    assert.match(CONTENT_SECURITY_POLICY, /script-src[^;]*'unsafe-inline'/)
    assert.match(CONTENT_SECURITY_POLICY, /https:\/\/www\.googletagmanager\.com/)
    assert.match(CONTENT_SECURITY_POLICY, /https:\/\/www\.google-analytics\.com/)
    assert.match(CONTENT_SECURITY_POLICY, /font-src[^;]*'self'/)
    assert.match(CONTENT_SECURITY_POLICY, /https:\/\/fonts\.gstatic\.com/)
    assert.match(CONTENT_SECURITY_POLICY, /style-src[^;]*https:\/\/fonts\.googleapis\.com/)
    assert.match(CONTENT_SECURITY_POLICY, /form-action 'self'/)
    assert.doesNotMatch(CONTENT_SECURITY_POLICY, /upgrade-insecure-requests/)
  })
})
