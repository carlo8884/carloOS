import assert from 'node:assert/strict'
import { test } from 'node:test'
import { checklistCopyText, guideAddressCaptureEnabled } from './guide-checklist.ts'

test('address capture stays off unless the env flag is exactly true', () => {
  assert.equal(guideAddressCaptureEnabled(undefined), false)
  assert.equal(guideAddressCaptureEnabled(''), false)
  assert.equal(guideAddressCaptureEnabled('false'), false)
  assert.equal(guideAddressCaptureEnabled('TRUE'), false)
  assert.equal(guideAddressCaptureEnabled('1'), false)
  assert.equal(guideAddressCaptureEnabled('true'), true)
})

test('checklist copy is the page lines and adds no contact field', () => {
  const text = checklistCopyText([
    'Buy the iCrate if you are house-training and the dog is not already an escape artist.',
    '  Browse MidWest iCrate dog crates on Amazon  ',
    '   ',
  ])
  assert.equal(
    text,
    '- Buy the iCrate if you are house-training and the dog is not already an escape artist.\n- Browse MidWest iCrate dog crates on Amazon',
  )
  assert.equal(/email|address|phone/i.test(text), false)
})
