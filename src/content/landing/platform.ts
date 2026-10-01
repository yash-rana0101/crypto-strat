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
    heading: 'What sits underneath the four headline features',
    body: 'The measurement layer the Co-Pilot calls, and the surfaces you can read directly without asking it anything.',
  },
  features: [
    {
      icon: 'search',
      accent: 'emerald',
      title: 'Patterns, completed and forming',
      body: 'Twenty-six pattern labels across five categories — reversal, continuation, bilateral, harmonic and institutional — each carrying a derived confidence and a volume-validation verdict. A second pass reports patterns still forming, with a progress estimate, using a provisional swing at the current bar.',
      href: '/features/ai-crypto-analysis',
    },
    {
      icon: 'cpu',
      accent: 'violet',
      title: 'Order flow, measured not assumed',
      body: 'Tick-level order flow imbalance signed by the tick rule and refined by quote location wherever a usable bid and ask exist. Below the minimum tick count it returns nothing rather than a neutral zero. Footprint cells carry bid- and ask-initiated volume at every price level.',
      href: '/features/crypto-trading-terminal',
    },
    {
      icon: 'bar-chart',
      accent: 'orange',
      title: 'Volume profile, mirrored twice',
      body: 'Point of control, value area high and low at seventy percent of traded volume, plus high and low volume nodes. Implemented independently on both sides on purpose, so the levels the agent reasons about are the levels drawn on your chart.',
    },
    {
      icon: 'layers',
      accent: 'pink',
      title: 'Perpetuals derivatives analytics',
      body: 'Funding rates and funding velocity, open-interest buildup quadrants, liquidation clusters, long/short ratio, perpetual basis against spot and order-book imbalance. Six signals vote on positioning bias, and at least two must agree before it will say anything at all.',
      href: '/features/crypto-derivatives-analysis',
    },
    {
      icon: 'compass',
      accent: 'emerald',
      title: 'Four workspaces',
      body: 'Intraday, Swing, Positional and Perpetuals. Each carries its own reward-to-risk floor, its own sidebar, its own remembered instrument and its own tool binding. Split view is granted only where it makes sense, and that is enforced in the store rather than merely hidden in the interface.',
      href: '/features/ai-trading-platform',
    },
    {
      icon: 'clock',
      accent: 'violet',
      title: 'Regime, session and relative strength',
      body: 'Trend state and volatility state as an orthogonal pair rather than one flattened label. A 24/7 session model with a UTC daily close, 8-hour funding windows and weekend liquidity regimes. Relative strength against BTC as the resolved benchmark, time-aligned with no lookahead. Scheduled-event proximity that can only tighten a setup, never loosen one.',
    },
  ],
};
