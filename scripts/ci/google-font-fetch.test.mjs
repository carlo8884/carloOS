import { createRequire } from 'node:module'
import test from 'node:test'
import assert from 'node:assert/strict'

const require = createRequire(import.meta.url)
const { isGoogleFontUrl, isValidFontCss, isValidFontFile } = require('./patch-google-font-fetch.cjs')

const css = `@font-face {
  font-family: 'Bodoni Moda';
  src: url(https://fonts.gstatic.com/s/bodonimoda/v28/file.woff2) format('woff2');
}`

test('accepts a real Google Fonts stylesheet', () => {
  assert.equal(isValidFontCss(css), true)
})

test('rejects an empty or HTML stylesheet', () => {
  assert.equal(isValidFontCss(''), false)
  assert.equal(isValidFontCss('<!DOCTYPE html><html>blocked</html>'), false)
  assert.equal(isValidFontCss('/* empty */'), false)
})

test('accepts woff2 bytes and rejects a short body', () => {
  const font = Buffer.alloc(256)
  font.write('wOF2', 0, 'latin1')
  assert.equal(isValidFontFile(font), true)
  assert.equal(isValidFontFile(Buffer.from('<!DOCTYPE html>')), false)
})

test('only intercepts Google font hosts', () => {
  assert.equal(isGoogleFontUrl('https://fonts.googleapis.com/css2?family=Inter'), true)
  assert.equal(isGoogleFontUrl('https://fonts.gstatic.com/s/inter/file.woff2'), true)
  assert.equal(isGoogleFontUrl('https://example.com/font.woff2'), false)
})
