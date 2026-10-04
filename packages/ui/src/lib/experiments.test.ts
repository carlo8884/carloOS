import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  CRATE_HOP_EXPERIMENT,
  crateHopLabelEnabled,
  resolveCrateHopExperiment,
} from './experiments.ts'

test('crate hop experiment stays off unless the flag is exactly true', () => {
  for (const value of [undefined, '', 'false', 'TRUE', '1', 'yes']) {
    assert.equal(crateHopLabelEnabled(value), false)
    const resolved = resolveCrateHopExperiment(undefined, value, 0.9)
    assert.deepEqual(resolved.params, {})
    assert.equal(resolved.cookie, null)
  }
  assert.equal(crateHopLabelEnabled('true'), true)
})

test('an enabled experiment assigns a once and then keeps it', () => {
  const assigned = resolveCrateHopExperiment('', 'true', 0.1)
  assert.deepEqual(assigned.params, { experiment: CRATE_HOP_EXPERIMENT, variant: 'a' })
  assert.equal(assigned.cookie, 'crate_hop_label=a')

  const variant = resolveCrateHopExperiment('', 'true', 0.5)
  assert.equal(variant.params.variant, 'b')
  assert.equal(variant.cookie, 'crate_hop_label=b')

  const kept = resolveCrateHopExperiment('crate_hop_label=b', 'true', 0.1)
  assert.equal(kept.params.variant, 'b')
  assert.equal(kept.cookie, null)
})

test('a stored assignment is ignored while the flag is off', () => {
  const resolved = resolveCrateHopExperiment('crate_hop_label=b', undefined, 0.9)
  assert.deepEqual(resolved.params, {})
  assert.equal(resolved.cookie, null)
})
