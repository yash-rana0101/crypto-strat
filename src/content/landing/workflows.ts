import type { WorkflowsContent } from '@/types/landing';

/**
 * Where each surface fits across a trading session.
 *
 * Written strictly as terminal mechanics. No outcome language, no second-person
 * benefit claims, nothing implying suitability — BRAND_GUIDELINES 1 rules 1 and
 * 12, and the section 3 review checklist.
 *
 * Claims:
 * - Regime reported as an orthogonal pair; every ranging row is unfavourable —
 *   FEATURE_CATALOGUE 6.8
 * - 24/7 session model with a UTC daily close, 8-hour funding windows and
 *   weekend liquidity regimes — 6.10
 * - Event risk only tightens — 6.11
 * - Opening range taken from the first fifteen candles after the UTC daily
 *   open — 6.7
 * - Volume profile POC and value area — 6.5
 * - Forming patterns with a progress estimate — 5.3
 * - VERIFY check order and reason tags — 8.2
 * - watch_price_condition suspends the run; the tool server watches live ticks
 *   and resumes when the level triggers — 3.4, 3.8
 * - Journal records, then scores target-first versus stop-first, and
 *   expectancy per setup type is a hard instruction to reduce conviction —
 *   14.1, 14.3
 * - Discipline metrics replaced performance metrics on the dashboard — 14.5
 */
export const workflows: WorkflowsContent = {
  intro: {
    id: 'workflows',
    badge: 'Session flow',
    heading: 'From market open to audited decision',
    body: 'Five checks. One continuous research trail.',
  },
  steps: [
    {
      phase: 'Before open',
      title: 'Read regime',
      body: 'Trend, volatility, funding and event risk.',
      artefact: 'CONTEXT',
      icon: 'compass',
    },
    {
      phase: 'UTC open',
      title: 'Map structure',
      body: 'Opening range, value area and forming patterns.',
      artefact: 'STRUCTURE',
      icon: 'chart',
    },
    {
      phase: 'Setup',
      title: 'Verify risk',
      body: 'Entry, stop and target face hard checks.',
      artefact: 'PASS / REJECT',
      icon: 'shield-check',
    },
    {
      phase: 'Trigger',
      title: 'Watch price',
      body: 'Analysis resumes when the level trades.',
      artefact: 'LIVE WATCH',
      icon: 'target',
    },
    {
      phase: 'After',
      title: 'Audit the read',
      body: 'Outcome and expectancy return to the journal.',
      artefact: 'JOURNAL',
      icon: 'check',
    },
  ],
  note: 'Research workflow—not a signal or recommendation.',
};
