import { redirect } from 'next/navigation'

/** Alias for the existing ferret money-path tool. */
export default function FerretCostCalculatorAlias() {
  redirect('/tools/cost-calculator')
}
