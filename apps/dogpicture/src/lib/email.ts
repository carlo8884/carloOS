/**
 * Email helper — sends the digital download link after Stripe checkout.
 *
 * Uses Resend if RESEND_API_KEY is set, otherwise logs to console (dev mode).
 * Never throws on send failure — we record the order regardless; missing
 * emails get re-sent from a future ops dashboard.
 */

export interface DigitalDeliveryParams {
  to: string
  downloadUrl: string
  petName: string
}

export async function sendDigitalDelivery(params: DigitalDeliveryParams): Promise<void> {
  const { to, downloadUrl, petName } = params
  const subject = `Your DogPicture portrait of ${petName} is ready`
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #1a0f08;">
      <h1 style="font-size: 24px; margin: 0 0 16px;">Your portrait is ready 🎨</h1>
      <p>Thanks for ordering through DogPicture.com. Here is the high-resolution download of <strong>${escapeHtml(petName)}</strong>:</p>
      <p style="margin: 32px 0;">
        <a href="${downloadUrl}" style="background: #F97316; color: white; padding: 14px 24px; border-radius: 999px; text-decoration: none; font-weight: 700;">Download your portrait</a>
      </p>
      <p style="font-size: 13px; color: #5c3e28;">The link works for 30 days. Save the file somewhere safe so you can print it whenever you like.</p>
      <p style="font-size: 13px; color: #9a7860; margin-top: 32px;">— The DogPicture team</p>
    </div>
  `.trim()

  if (!process.env.RESEND_API_KEY) {
    // Dev mode — just log
    console.log('[email][dev]', { to, subject, downloadUrl })
    return
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? 'hello@dogpicture.com',
        to,
        subject,
        html,
      }),
    })
    if (!res.ok) {
      console.error('[email][resend] failed', res.status, await res.text())
    }
  } catch (err) {
    console.error('[email][resend] error', err)
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
