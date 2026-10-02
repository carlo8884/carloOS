import { expect, type APIRequestContext } from '@playwright/test'

export async function expectHop(
  request: APIRequestContext,
  path: string,
  locationIncludes: string[],
) {
  const hop = await request.get(path, { maxRedirects: 0 })
  expect(hop.status(), `${path} status`).toBe(302)
  const location = hop.headers()['location'] || ''
  expect(location, `${path} location`).not.toBe('')
  for (const part of locationIncludes) {
    expect(location, `${path} location`).toContain(part)
  }
  return location
}
