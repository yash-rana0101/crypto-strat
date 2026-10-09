import type { RefusalsContent } from '@/types/landing';

/**
 * What the product cannot do, and the code that makes that true.
 *
 * Claims:
 * - The exchange layer exposes quote, instruments and search only, with no
 *   order or withdrawal paths; a scope-boundary test maintains a denylist of
 *   order-placement and withdrawal names asserted absent, so read-only is
 *   enforced by test rather than convention — FEATURE_CATALOGUE 12.1
 * - Unmeasurable indicator values are emitted as NaN and reach the wire as
 *   JSON null; UNAVAILABLE consensus states exist precisely to separate
 *   "measured and unremarkable" from "could not be measured" — 4.1, 4.2
 * - The personalisation guardrail is pure, total, deterministic and runs
 *   pre-LLM across eight ordered categories, with NFKC normalisation — 15
 * - Total return, win rate, max drawdown and average conviction were removed
 *   from the dashboard and replaced with discipline metrics rendering an
 *   em-dash for anything unmeasured; no endpoint exposes journal statistics —
 *   14.5
 * - Committed decisions are written to hash-chained, append-only records
 *   carrying the model id and prompt hash, with no update or delete path — 15
 *
 * NOT CLAIMED HERE, deliberately: the Argon2id / AES-256 / Tauri Stronghold
 * credential vault. Catalogue 13.3 finds zero occurrences of `stronghold` or
 * `argon2` in the repository and instructs treating the claim as unverified
 * until the unchecked-out `src-tauri` submodule is inspected. Catalogue 17
 * ranks it a High-consequence divergence. Do not reinstate it here without
 * that verification.
 */
export const refusals: RefusalsContent = {
  intro: {
    id: 'security',
    badge: 'What it refuses to do',
    heading: 'Five things the terminal cannot do.',
    body: 'These are product boundaries—not policy promises.',
  },
  pills: [
    { icon: 'shield-check', label: 'No order path', accent: 'emerald' },
    { icon: 'layers', label: 'Read-only exchange interface', accent: 'orange' },
    { icon: 'zap', label: 'Honest failure', accent: 'violet' },
  ],
  refusals: [
    {
      title: 'Place or modify an order',
      body: 'The exchange connection is read-only.',
      proof: 'No order path',
    },
    {
      title: 'Turn missing data into a guess',
      body: 'Unknown stays null or UNAVAILABLE.',
      proof: 'Honest failure',
    },
    {
      title: 'Give personal financial advice',
      body: 'Personal circumstances are refused before the model runs.',
      proof: 'Pre-model guardrail',
    },
    {
      title: 'Claim performance it did not measure',
      body: 'No published win rate, return or drawdown.',
      proof: 'Metrics removed',
    },
    {
      title: 'Rewrite a committed decision',
      body: 'Final outputs are append-only and replayable.',
      proof: 'Hash chained',
    },
  ],
};
