import type { HeroContent } from '@/types/landing';

/**
 * Hero copy.
 *
 * Claims used here:
 * - 18 typed tools bound to the reasoning loop — FEATURE_CATALOGUE 3.4
 * - Tool payloads pass validate_contract, no tool may fabricate — 3.4
 * - "tells you when not to trade" is the approved positioning line —
 *   BRAND_GUIDELINES 2
 */
export const hero: HeroContent = {
  attribution: {
    prefix: 'Built by',
    label: 'Trading & Research Wing',
    href: 'https://www.tradingrw.com/',
  },
  heading: 'Ask the market. Get computed answers.',
  body: 'Live crypto analysis and pre-trade risk—without guesswork.',
  productHunt: {
    label: 'Find us on Product Hunt',
    href: 'https://www.producthunt.com/products/strat-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-strat-ai',
    badgeSrc:
      'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1203967&theme=neutral&t=1784757622538',
    badgeAlt: 'Strat AI on Product Hunt',
  },
  primaryCta: {
    label: 'Join Waitlist',
    href: '/waitlist',
  },
  secondaryCta: {
    label: 'See the pre-trade audit',
    href: '#verify',
  },
  note: 'Research only · No execution · Not financial advice',
};
