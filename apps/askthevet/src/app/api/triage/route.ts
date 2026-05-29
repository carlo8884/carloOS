/**
 * POST /api/triage
 *
 * Body: { question: string, species: string, age?: number, breed?: string }
 * Returns: { id: string, response: TriageResponse }
 *
 * Behaviour:
 *  1. Validates input.
 *  2. Calls OpenAI Chat Completions with the TRIAGE_SYSTEM_PROMPT.
 *  3. Parses + repairs the JSON response.
 *  4. Persists to Supabase `triage_queries` (or in-memory fallback).
 *  5. Returns the id so the client can redirect to /result/[id].
 *
 * If OPENAI_API_KEY is missing, returns a deterministic mock response so the
 * full UI flow remains testable end-to-end.
 */

import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import {
  TRIAGE_SYSTEM_PROMPT,
  TRIAGE_PROMPT_VERSION,
  buildUserMessage,
  type TriageInput,
  type TriageResponse,
} from '@/lib/triage-prompt'
import { saveTriageQuery } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MODEL = process.env.OPENAI_MODEL ?? 'gpt-4o-mini'

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 })
}

function makeId(): string {
  // Short, URL-safe id; not cryptographic, just unique enough for routing.
  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 8)
  )
}

function mockResponse(input: TriageInput): TriageResponse {
  // Deterministic fallback so /result/[id] renders without OpenAI configured.
  const q = input.question.toLowerCase()
  const urgent = /chocolate|seizure|collapse|breathing|blood|hit by car|xylitol/.test(q)
  if (urgent) {
    return {
      triage_level: 'urgent_er',
      summary:
        'Based on the symptoms described, this could be a time-sensitive emergency. Get your pet to an emergency vet now — do not wait to see how it develops.',
      next_steps: [
        'Call the nearest 24-hour emergency veterinary hospital and tell them you are on the way.',
        'If a known toxin was ingested, bring the packaging.',
        'Keep your pet warm, calm, and avoid food or water until the vet has assessed them.',
      ],
      monetization_route: 'directory',
      product_recommendations: [],
      insurance_relevant: true,
      vet_visit_recommended: true,
      disclaimer:
        'This is consumer health information, not veterinary advice. Consult your vet for diagnosis.',
    }
  }
  return {
    triage_level: 'non_urgent_vet',
    summary:
      'The symptoms you describe are not an immediate emergency, but they do warrant a vet check within the next 24–48 hours so the cause can be identified properly.',
    next_steps: [
      'Note when the symptom started, how often it occurs, and any changes in appetite, energy, or stool.',
      'Book a telehealth or in-person vet visit within 24–48 hours.',
      'Keep your pet hydrated and avoid changing their diet abruptly.',
    ],
    monetization_route: 'telehealth',
    product_recommendations: [
      { category: 'bland-diet food', rationale: 'Helps settle the stomach while you wait for the visit.' },
    ],
    insurance_relevant: true,
    vet_visit_recommended: true,
    disclaimer:
      'This is consumer health information, not veterinary advice. Consult your vet for diagnosis.',
  }
}

function safeParseJSON(raw: string): TriageResponse | null {
  // Strip code fences if the model wrapped JSON in ```json ... ```.
  const cleaned = raw
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim()
  try {
    return JSON.parse(cleaned) as TriageResponse
  } catch {
    // Last-ditch: find the first `{` and the last `}` and parse the slice.
    const start = cleaned.indexOf('{')
    const end = cleaned.lastIndexOf('}')
    if (start === -1 || end === -1) return null
    try {
      return JSON.parse(cleaned.slice(start, end + 1)) as TriageResponse
    } catch {
      return null
    }
  }
}

export async function POST(req: Request) {
  let body: TriageInput
  try {
    body = (await req.json()) as TriageInput
  } catch {
    return badRequest('Invalid JSON body')
  }

  if (!body || typeof body.question !== 'string' || !body.question.trim()) {
    return badRequest('`question` is required')
  }
  if (!body.species || typeof body.species !== 'string') {
    return badRequest('`species` is required')
  }
  if (body.question.length > 1000) {
    return badRequest('`question` is too long (max 1000 chars)')
  }

  const input: TriageInput = {
    question: body.question.trim(),
    species: body.species.trim(),
    age: typeof body.age === 'number' ? body.age : undefined,
    breed: typeof body.breed === 'string' ? body.breed.trim() : undefined,
  }

  const apiKey = process.env.OPENAI_API_KEY
  let response: TriageResponse | null = null

  if (apiKey) {
    try {
      const client = new OpenAI({ apiKey })
      const completion = await client.chat.completions.create({
        model: MODEL,
        temperature: 0.2,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: TRIAGE_SYSTEM_PROMPT },
          { role: 'user', content: buildUserMessage(input) },
        ],
      })
      const raw = completion.choices[0]?.message?.content ?? ''
      response = safeParseJSON(raw)
    } catch (err) {
      console.error('[askthevet] openai call failed:', err)
    }
  }

  if (!response) {
    response = mockResponse(input)
  }

  const id = makeId()
  await saveTriageQuery({
    id,
    question: input.question,
    species: input.species,
    age: input.age ?? null,
    breed: input.breed ?? null,
    response_json: { ...response, _prompt_version: TRIAGE_PROMPT_VERSION },
    monetization_route: response.monetization_route,
  })

  return NextResponse.json({ id, response })
}
