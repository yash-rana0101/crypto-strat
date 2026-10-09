import type { PlatformContent } from '@/types/landing';

/**
 * The measurement layer beneath the four headline features.
 *
 * Claims:
 * - 26 pattern labels across five categories, derived confidence, volume
 *   validation verdict per pattern — FEATURE_CATALOGUE 5.1, 5.2
 * - Separate forming-pattern engine with provisional swing on the current bar
 *   and a formation-progress estimate — 5.3
 * - Tick-level OFI signed by the tick rule, refined by quote location, returns
 *   nothing below the minimum usable tick count — 6.2
 * - Footprint cells carry bid- and ask-initiated volume per price level, and a
 *   candle with no ticks produces zero cells rather than apparent balance —
 *   6.4
 * - Volume profile implemented twice so agent levels equal rendered levels;
 *   value area at 70% of volume; HVN and LVN — 6.5
 * - Funding rates and velocity, OI buildup quadrants, liquidation clusters,
 *   long/short ratio, perpetual basis vs spot, order-book imbalance — 7
 * - Six-signal derivatives bias vote requiring at least two signals — 7.1
 * - Four workspace profiles with their own R:R floor, sidebar, remembered
 *   instrument and tool binding; split view gated at the store — 11, 11.1
 * - Regime as an orthogonal trend/volatility pair — 6.8
 * - 24/7 session model with UTC daily close, 8-hour funding windows and
 *   weekend liquidity regimes — 6.10
 * - Event risk can only tighten, never loosen — 6.11
 * - Relative strength time-aligned with no lookahead — 6.9
 * - Journal records, scores and aggregates; discipline metrics replaced the
 *   performance metrics on the dashboard — 14.1, 14.5
 */
export const platform: PlatformContent = {
  intro: {
    id: 'features',
    badge: 'Platform Intelligence',
    heading: 'Six ways the terminal measures the market.',
    body: 'Read them directly, or let the Co-Pilot call them as tools.',
  },
  features: [
    {
      icon: 'search',
      accent: 'emerald',
      title: 'Pattern structure',
      body: 'Completed and still-forming structures.',
      signal: '26 labels · 5 families',
      href: '/features/ai-crypto-analysis',
    },
    {
      icon: 'cpu',
      accent: 'violet',
      title: 'Order flow',
      body: 'Tick imbalance and bid/ask footprint.',
      signal: 'OFI · footprint',
      href: '/features/crypto-trading-terminal',
    },
    {
      icon: 'bar-chart',
      accent: 'orange',
      title: 'Volume profile',
      body: 'The same levels on chart and in reasoning.',
      signal: 'POC · VAH · VAL',
    },
    {
      icon: 'layers',
      accent: 'pink',
      title: 'Derivatives positioning',
      body: 'Funding, OI, liquidations, basis and bias.',
      signal: '6-signal vote',
      href: '/features/crypto-derivatives-analysis',
    },
    {
      icon: 'compass',
      accent: 'emerald',
      title: 'Trading workspaces',
      body: 'A risk floor and toolset for each style.',
      signal: '4 profiles',
      href: '/features/ai-trading-platform',
    },
    {
      icon: 'clock',
      accent: 'violet',
      title: 'Market context',
      body: 'Regime, session, events and relative strength.',
      signal: 'Time-aligned',
    },
  ],
};
