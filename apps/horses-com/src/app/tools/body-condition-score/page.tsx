import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  ArticleByline,
  FAQAccordion,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { BodyConditionScoreCalculator } from '../../../components/visual/BodyConditionScoreCalculator'
import ConditionKit from './ConditionKit'

const URL = 'https://horses.com/tools/body-condition-score'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Body Condition Score Calculator (Henneke) | Horses.com',
  description: 'Free Henneke body condition score (BCS 1-9) calculator. Score six body areas, get overall BCS, condition narrative, and feeding guidance per range.',
  path: '/tools/body-condition-score',
})
