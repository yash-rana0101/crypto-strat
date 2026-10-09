import type { EngineContent } from '@/types/landing';

/**
 * The three-layer explanation of why the model never authors a number.
 *
 * Claims:
 * - Exchange WebSocket stream decoding, tick streams plus order-book depth,
 *   open interest kept as an optional and never fabricated as zero —
 *   FEATURE_CATALOGUE 1.1
 * - Dual sink topology and bounded channel — 1.2
 * - Pure property-tested quant modules; NaN on the wire becomes JSON null;
 *   UNAVAILABLE is a distinct consensus state from NEUTRAL — 4.1, 4.2
 * - 26 pattern labels across five categories — 5.1
 * - Volume profile POC / VAH / VAL — 6.5
 * - 1.5x ATR validator mirrored in two languages — 8.1
 * - 18 typed tools, validate_contract on every payload, three distinct tool
 *   bindings — 3.4, 3.5
 * - Glass-box typed event stream — 3.1
 */
export const engine: EngineContent = {
  intro: {
    id: 'engine',
    badge: 'How the numbers reach the model',
    heading: 'Market data in. Auditable numbers out.',
    body: 'Three layers keep measurement separate from reasoning. The model interprets checked results; it never calculates them.',
  },
  layers: [
    {
      index: '01',
      label: 'Market',
      heading: 'Capture',
      body: 'Read-only exchange streams enter field by field.',
      chips: [
        'TICKS',
        'DEPTH',
        'FUNDING + OI',
      ],
    },
    {
      index: '02',
      label: 'Quant',
      heading: 'Measure',
      body: 'Pure functions calculate every market value.',
      chips: [
        'PATTERNS',
        'PROFILE',
        'RISK',
      ],
    },
    {
      index: '03',
      label: 'Model',
      heading: 'Reason',
      body: 'Typed tools carry validated results to the model.',
      chips: [
        '18 TYPED TOOLS',
        'VALIDATED',
        'TRACEABLE',
      ],
    },
  ],
  punchline: {
    label: 'Hard boundary',
    heading: 'The model never invents a number.',
    body: 'If a measurement is missing, it stays unavailable—not plausible.',
  },
};
