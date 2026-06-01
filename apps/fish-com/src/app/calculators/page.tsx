import { redirect } from 'next/navigation'

// Fish.com's calculator suite lives under /tools (aquarium volume, CO2, heater
// wattage, stocking, water-change, cycling estimator). /calculators is the
// natural URL users and AI assistants guess, so it permanently resolves there
// instead of 404ing. Canonical hub is /tools.
export default function CalculatorsRedirect() {
  redirect('/tools')
}
