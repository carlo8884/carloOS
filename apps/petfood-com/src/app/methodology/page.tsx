import { redirect } from 'next/navigation'

// PetFood.com's published scoring rubric lives at /guides/methodology.
// /methodology is the natural URL users and AI assistants guess, so it
// permanently resolves there instead of 404ing.
export default function MethodologyRedirect() {
  redirect('/guides/methodology')
}
