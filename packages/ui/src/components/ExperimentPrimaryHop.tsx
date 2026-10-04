'use client'

import { useEffect, useState } from 'react'
import { experimentEventParams } from '../lib/experiment-client'
import { CRATE_HOP_EXPERIMENT } from '../lib/experiments'
import { PrimaryHop } from './PrimaryHop'

/**
 * Primary hop whose label can follow crate_hop_label.
 * The first paint is always the control label, so the page matches
 * the off state and does not flash a variant before the cookie is read.
 */
export function ExperimentPrimaryHop({
  href,
  experiment,
  control,
  variant,
}: {
  href: string
  experiment: typeof CRATE_HOP_EXPERIMENT
  control: string
  variant: string
}) {
  const [label, setLabel] = useState(control)
  useEffect(() => {
    const params = experimentEventParams()
    if (params.experiment === experiment && params.variant === 'b') setLabel(variant)
  }, [experiment, variant])
  return <PrimaryHop href={href} label={label} />
}
