/**
 * HardMoneyLoans.com — State registry for programmatic SEO.
 *
 * 50 states + DC, with editorial notes on:
 *   - broker licensing requirements
 *   - usury caps (where they apply to commercial loans)
 *   - DSCR / non-owner-occupied restrictions
 *   - average top metro
 *
 * Every claim here is generic public regulatory knowledge — when a state
 * page reads as legal advice, swap to "consult licensed counsel."
 */

export interface StateInfo {
  code: string
  name: string
  topMetros: string[]
  /** Loose summary of licensing posture — never legal advice. */
  licensingNote: string
  /** Whether private (non-owner) lending is generally smooth or has friction. */
  marketPosture: 'investor-friendly' | 'moderate' | 'restrictive'
}

export const STATES: StateInfo[] = [
  { code: 'AL', name: 'Alabama', topMetros: ['Birmingham', 'Huntsville', 'Mobile'], licensingNote: 'Most non-owner-occupied private lending is permitted with limited state-level licensing; consumer-purpose loans require a license.', marketPosture: 'investor-friendly' },
  { code: 'AK', name: 'Alaska', topMetros: ['Anchorage', 'Fairbanks'], licensingNote: 'Many large private lenders do not lend in Alaska due to volume; coverage is limited.', marketPosture: 'restrictive' },
  { code: 'AZ', name: 'Arizona', topMetros: ['Phoenix', 'Tucson', 'Mesa'], licensingNote: 'Commercial-purpose loans are largely unregulated at the state level; consumer-purpose loans require AZ DFI license.', marketPosture: 'investor-friendly' },
  { code: 'AR', name: 'Arkansas', topMetros: ['Little Rock', 'Fayetteville'], licensingNote: 'Arkansas usury caps are notably tight and apply to many private loans — consult counsel.', marketPosture: 'restrictive' },
  { code: 'CA', name: 'California', topMetros: ['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento'], licensingNote: 'CA Finance Lenders License (CFL) or DRE broker license required for most private lending — California is heavily licensed.', marketPosture: 'moderate' },
  { code: 'CO', name: 'Colorado', topMetros: ['Denver', 'Colorado Springs', 'Boulder'], licensingNote: 'Most business-purpose loans are not consumer-licensed; investor-purpose lending is widely available.', marketPosture: 'investor-friendly' },
  { code: 'CT', name: 'Connecticut', topMetros: ['Hartford', 'New Haven', 'Bridgeport'], licensingNote: 'Connecticut requires lender registration and has tighter consumer protections than many states.', marketPosture: 'moderate' },
  { code: 'DE', name: 'Delaware', topMetros: ['Wilmington', 'Dover'], licensingNote: 'Generally investor-friendly for business-purpose loans.', marketPosture: 'investor-friendly' },
  { code: 'DC', name: 'District of Columbia', topMetros: ['Washington DC'], licensingNote: 'DC imposes specific licensing on lenders and stricter consumer rules.', marketPosture: 'moderate' },
  { code: 'FL', name: 'Florida', topMetros: ['Miami', 'Tampa', 'Orlando', 'Jacksonville'], licensingNote: 'Florida is a top-3 investor market — most major private lenders are active here.', marketPosture: 'investor-friendly' },
  { code: 'GA', name: 'Georgia', topMetros: ['Atlanta', 'Augusta', 'Savannah'], licensingNote: 'Mortgage Broker License required for some structures; business-purpose loans broadly available.', marketPosture: 'investor-friendly' },
  { code: 'HI', name: 'Hawaii', topMetros: ['Honolulu'], licensingNote: 'Limited national lender coverage; expect a local-relationship process.', marketPosture: 'restrictive' },
  { code: 'ID', name: 'Idaho', topMetros: ['Boise', 'Idaho Falls'], licensingNote: 'A handful of national digital lenders exclude Idaho; state licensing applies.', marketPosture: 'moderate' },
  { code: 'IL', name: 'Illinois', topMetros: ['Chicago', 'Aurora', 'Naperville'], licensingNote: 'Illinois Residential Mortgage License or business-purpose exemption applies; Chicago is a top flip market.', marketPosture: 'moderate' },
  { code: 'IN', name: 'Indiana', topMetros: ['Indianapolis', 'Fort Wayne'], licensingNote: 'Generally permissive for business-purpose lending.', marketPosture: 'investor-friendly' },
  { code: 'IA', name: 'Iowa', topMetros: ['Des Moines', 'Cedar Rapids'], licensingNote: 'Iowa applies relatively tight usury limits to certain loan structures.', marketPosture: 'moderate' },
  { code: 'KS', name: 'Kansas', topMetros: ['Wichita', 'Kansas City'], licensingNote: 'Investor-purpose loans broadly available; some consumer-purpose registration required.', marketPosture: 'investor-friendly' },
  { code: 'KY', name: 'Kentucky', topMetros: ['Louisville', 'Lexington'], licensingNote: 'Mortgage broker registration applies; investor lending is active.', marketPosture: 'moderate' },
  { code: 'LA', name: 'Louisiana', topMetros: ['New Orleans', 'Baton Rouge'], licensingNote: 'Louisiana civil-law system affects foreclosure and lien timing — lenders may apply different terms.', marketPosture: 'moderate' },
  { code: 'ME', name: 'Maine', topMetros: ['Portland', 'Bangor'], licensingNote: 'Limited national lender presence; consumer-purpose loans are licensed.', marketPosture: 'moderate' },
  { code: 'MD', name: 'Maryland', topMetros: ['Baltimore', 'Silver Spring'], licensingNote: 'MD mortgage lender license required for most consumer-purpose loans.', marketPosture: 'moderate' },
  { code: 'MA', name: 'Massachusetts', topMetros: ['Boston', 'Worcester', 'Springfield'], licensingNote: 'Massachusetts has among the strictest mortgage licensing rules — verify lender authorization.', marketPosture: 'restrictive' },
  { code: 'MI', name: 'Michigan', topMetros: ['Detroit', 'Grand Rapids', 'Lansing'], licensingNote: 'Michigan first lien mortgage license required for most lending against residential.', marketPosture: 'moderate' },
  { code: 'MN', name: 'Minnesota', topMetros: ['Minneapolis', 'St. Paul'], licensingNote: 'Some national lenders exclude Minnesota due to state-specific rules.', marketPosture: 'restrictive' },
  { code: 'MS', name: 'Mississippi', topMetros: ['Jackson', 'Gulfport'], licensingNote: 'Investor lending is available but with regional concentration.', marketPosture: 'moderate' },
  { code: 'MO', name: 'Missouri', topMetros: ['Kansas City', 'St. Louis', 'Springfield'], licensingNote: 'Investor-friendly; most national lenders active.', marketPosture: 'investor-friendly' },
  { code: 'MT', name: 'Montana', topMetros: ['Billings', 'Missoula'], licensingNote: 'Smaller market — fewer active national lenders.', marketPosture: 'moderate' },
  { code: 'NE', name: 'Nebraska', topMetros: ['Omaha', 'Lincoln'], licensingNote: 'Investor-purpose lending broadly available.', marketPosture: 'investor-friendly' },
  { code: 'NV', name: 'Nevada', topMetros: ['Las Vegas', 'Reno'], licensingNote: 'Nevada Mortgage Banker / Broker License required and several national private lenders do NOT lend here — verify before application.', marketPosture: 'restrictive' },
  { code: 'NH', name: 'New Hampshire', topMetros: ['Manchester', 'Nashua'], licensingNote: 'Limited but available; verify state coverage at application.', marketPosture: 'moderate' },
  { code: 'NJ', name: 'New Jersey', topMetros: ['Newark', 'Jersey City'], licensingNote: 'NJ Residential Mortgage Lender License or business-purpose exemption applies.', marketPosture: 'moderate' },
  { code: 'NM', name: 'New Mexico', topMetros: ['Albuquerque', 'Santa Fe'], licensingNote: 'Investor lending available; smaller volume market.', marketPosture: 'moderate' },
  { code: 'NY', name: 'New York', topMetros: ['New York City', 'Buffalo', 'Rochester'], licensingNote: 'NY mortgage banker / broker license required; usury thresholds historically among the lowest in the US.', marketPosture: 'restrictive' },
  { code: 'NC', name: 'North Carolina', topMetros: ['Charlotte', 'Raleigh', 'Greensboro'], licensingNote: 'NC mortgage broker / lender license required for most loans; market is active.', marketPosture: 'moderate' },
  { code: 'ND', name: 'North Dakota', topMetros: ['Fargo', 'Bismarck'], licensingNote: 'Many national private lenders do NOT lend in North Dakota due to state-specific rules.', marketPosture: 'restrictive' },
  { code: 'OH', name: 'Ohio', topMetros: ['Columbus', 'Cleveland', 'Cincinnati'], licensingNote: 'Ohio investor lending is widely available; Cleveland is a top flip market.', marketPosture: 'investor-friendly' },
  { code: 'OK', name: 'Oklahoma', topMetros: ['Oklahoma City', 'Tulsa'], licensingNote: 'Investor-friendly for business-purpose loans.', marketPosture: 'investor-friendly' },
  { code: 'OR', name: 'Oregon', topMetros: ['Portland', 'Salem', 'Eugene'], licensingNote: 'Some major private lenders exclude Oregon; verify state coverage early.', marketPosture: 'restrictive' },
  { code: 'PA', name: 'Pennsylvania', topMetros: ['Philadelphia', 'Pittsburgh'], licensingNote: 'PA Mortgage Banker License or business-purpose exemption applies.', marketPosture: 'moderate' },
  { code: 'RI', name: 'Rhode Island', topMetros: ['Providence'], licensingNote: 'Mortgage lender license required; smaller national lender presence.', marketPosture: 'moderate' },
  { code: 'SC', name: 'South Carolina', topMetros: ['Columbia', 'Charleston', 'Greenville'], licensingNote: 'Investor lending is broadly available; state requires mortgage broker/lender license for many products.', marketPosture: 'moderate' },
  { code: 'SD', name: 'South Dakota', topMetros: ['Sioux Falls', 'Rapid City'], licensingNote: 'Many national private lenders do NOT lend in South Dakota.', marketPosture: 'restrictive' },
  { code: 'TN', name: 'Tennessee', topMetros: ['Nashville', 'Memphis', 'Knoxville'], licensingNote: 'Tennessee investor lending is active; usury caps apply to some structures.', marketPosture: 'investor-friendly' },
  { code: 'TX', name: 'Texas', topMetros: ['Houston', 'Dallas-Fort Worth', 'Austin', 'San Antonio'], licensingNote: 'Texas is one of the most active investor lending markets in the country; broker registration applies.', marketPosture: 'investor-friendly' },
  { code: 'UT', name: 'Utah', topMetros: ['Salt Lake City', 'Provo'], licensingNote: 'Several major private lenders exclude Utah due to state rules — verify before application.', marketPosture: 'restrictive' },
  { code: 'VT', name: 'Vermont', topMetros: ['Burlington'], licensingNote: 'Most national private lenders do NOT lend in Vermont.', marketPosture: 'restrictive' },
  { code: 'VA', name: 'Virginia', topMetros: ['Northern Virginia', 'Richmond', 'Virginia Beach'], licensingNote: 'VA mortgage broker / lender license required for many products.', marketPosture: 'moderate' },
  { code: 'WA', name: 'Washington', topMetros: ['Seattle', 'Tacoma', 'Spokane'], licensingNote: 'Consumer Loan Act License or business-purpose exemption applies; market is active.', marketPosture: 'moderate' },
  { code: 'WV', name: 'West Virginia', topMetros: ['Charleston', 'Huntington'], licensingNote: 'Smaller market; expect lower national lender density.', marketPosture: 'moderate' },
  { code: 'WI', name: 'Wisconsin', topMetros: ['Milwaukee', 'Madison'], licensingNote: 'Mortgage banker / broker license required; active investor market.', marketPosture: 'moderate' },
  { code: 'WY', name: 'Wyoming', topMetros: ['Cheyenne', 'Casper'], licensingNote: 'Smaller market; investor-purpose lending is generally permitted.', marketPosture: 'moderate' },
]

export function getState(code: string): StateInfo | undefined {
  return STATES.find((s) => s.code.toLowerCase() === code.toLowerCase())
}
