import assert from 'node:assert/strict'
import test from 'node:test'
import { emailClickSourceProblems } from './email-click-source.mjs'

test('every five-site email /go link carries an email source', () => {
  assert.deepEqual(emailClickSourceProblems(), [])
})
