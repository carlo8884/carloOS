import type { MetadataRoute } from 'next'
import { buildRobots } from '@carloOS/config/robots'

export default function robots(): MetadataRoute.Robots {
  return buildRobots('https://horses.com')
}
