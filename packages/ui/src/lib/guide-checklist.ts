/**
 * Guide address capture stays off until a real email provider is connected.
 * NEXT_PUBLIC_GUIDE_ADDRESS_CAPTURE=true turns the stored-address form back on.
 * The default is a shopping checklist built from sentences already on the page.
 */
export function guideAddressCaptureEnabled(
  env: string | undefined = process.env.NEXT_PUBLIC_GUIDE_ADDRESS_CAPTURE,
): boolean {
  return env === 'true'
}

/** Plain-text copy of the checklist. No address, email, or phone field. */
export function checklistCopyText(items: readonly string[]): string {
  return items
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((item) => `- ${item}`)
    .join('\n')
}
