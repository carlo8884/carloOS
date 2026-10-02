/**
 * Retry Google Fonts downloads during `next build`.
 *
 * next/font already retries three times, then crashes when the CSS or font
 * file is empty or not a font. The crash is `Cannot read properties of null
 * (reading '1')` in the Google font loader, because the file URL does not end
 * in .woff2. A bad response is cached in memory, so later compiles fail too.
 *
 * This hook wraps next's node-fetch for fonts.googleapis.com and
 * fonts.gstatic.com only. A valid response is stored under
 * node_modules/.cache/google-fonts so parallel app builds reuse it.
 * The font files next emits are still the files Google returned.
 */
'use strict'

const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')

const ATTEMPTS = 5
const TIMEOUT_MS = 15000

function isGoogleFontUrl(url) {
  return (
    typeof url === 'string' &&
    (url.startsWith('https://fonts.googleapis.com/') ||
      url.startsWith('https://fonts.gstatic.com/'))
  )
}

function isValidFontCss(text) {
  if (typeof text !== 'string' || text.length < 40) return false
  if (/<!doctype|<html/i.test(text)) return false
  return text.includes('fonts.gstatic.com') && /\.woff2?\)/.test(text)
}

function isValidFontFile(buf) {
  if (!Buffer.isBuffer(buf) || buf.length < 200) return false
  const magic = buf.subarray(0, 4).toString('latin1')
  return magic === 'wOF2' || magic === 'wOFF' || magic === 'OTTO' || magic === '\u0000\u0001\u0000\u0000'
}

function repoRoot() {
  let dir = process.cwd()
  for (let i = 0; i < 8; i++) {
    if (fs.existsSync(path.join(dir, 'turbo.json'))) return dir
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  return process.cwd()
}

function cacheFile(url) {
  const name = crypto.createHash('sha256').update(url).digest('hex')
  return path.join(repoRoot(), 'node_modules', '.cache', 'google-fonts', name)
}

function readCache(url) {
  const file = cacheFile(url)
  if (!fs.existsSync(file)) return null
  const buf = fs.readFileSync(file)
  if (url.includes('fonts.googleapis.com')) {
    return isValidFontCss(buf.toString('utf8')) ? buf : null
  }
  return isValidFontFile(buf) ? buf : null
}

function writeCache(url, buf) {
  const file = cacheFile(url)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const tmp = `${file}.${process.pid}.tmp`
  fs.writeFileSync(tmp, buf)
  fs.renameSync(tmp, file)
}

function fakeResponse(buf) {
  const body = Buffer.isBuffer(buf) ? buf : Buffer.from(buf)
  return {
    ok: true,
    status: 200,
    async text() {
      return body.toString('utf8')
    },
    async arrayBuffer() {
      const copy = new Uint8Array(body.byteLength)
      copy.set(body)
      return copy.buffer
    },
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchGoogleFont(originalFetch, url, options) {
  const cached = readCache(url)
  if (cached) return fakeResponse(cached)

  let lastError
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
      const res = await originalFetch(url, { ...options, signal: controller.signal })
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
      if (url.includes('fonts.googleapis.com')) {
        const text = await res.text()
        if (!isValidFontCss(text)) {
          throw new Error(`Google Fonts CSS was not a font stylesheet (${text.length} bytes)`)
        }
        const buf = Buffer.from(text)
        writeCache(url, buf)
        return fakeResponse(buf)
      }
      const buf = Buffer.from(await res.arrayBuffer())
      if (!isValidFontFile(buf)) {
        throw new Error(`Google font file was not a font (${buf.length} bytes)`)
      }
      writeCache(url, buf)
      return fakeResponse(buf)
    } catch (err) {
      lastError = err
      if (attempt < ATTEMPTS) {
        console.error(
          `[google-fonts] retry ${attempt}/${ATTEMPTS - 1} ${url.slice(0, 120)} (${err.message})`,
        )
        await sleep(400 * 2 ** (attempt - 1))
      }
    } finally {
      clearTimeout(timer)
    }
  }
  throw lastError
}

function install() {
  if (global.__CARLOOS_GOOGLE_FONT_PATCH) return
  global.__CARLOOS_GOOGLE_FONT_PATCH = true

  const originalRequire = Module.prototype.require
  Module.prototype.require = function (id) {
    const loaded = originalRequire.apply(this, arguments)
    if (typeof id !== 'string' || !id.includes('compiled/node-fetch') || !loaded || loaded.__carloFontWrapped) {
      return loaded
    }
    const originalFetch = typeof loaded === 'function' ? loaded : loaded.default
    if (typeof originalFetch !== 'function') return loaded

    const wrapped = function (url, options) {
      const href = url && typeof url === 'object' && url.href ? url.href : String(url)
      if (!isGoogleFontUrl(href)) return originalFetch.apply(this, arguments)
      return fetchGoogleFont(originalFetch, href, options)
    }
    Object.assign(wrapped, loaded)
    wrapped.default = wrapped
    wrapped.__esModule = true
    wrapped.__carloFontWrapped = true

    for (const key of Object.keys(require.cache)) {
      if (key.includes(`${path.sep}compiled${path.sep}node-fetch`) && require.cache[key].exports === loaded) {
        require.cache[key].exports = wrapped
      }
    }
    return wrapped
  }
}

install()

module.exports = {
  isGoogleFontUrl,
  isValidFontCss,
  isValidFontFile,
  install,
}
