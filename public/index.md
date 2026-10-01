---
title: Strat AI — Market Analysis & Pre-Trade Risk Terminal for Crypto Spot & Perpetuals
description: Strat AI evaluates crypto spot and perpetual futures trade setups, audits them against deterministic 1.5x ATR stop floors, and decodes live derivatives positioning. Analysis and risk tooling, not advice or execution.
canonical: https://www.stratai.live/
last-updated: 2026-08-31
---

# Strat AI

**AI that tells you when not to trade.**

Strat AI is a market analysis and pre-trade risk adjudication terminal for crypto
markets: spot pairs and perpetual futures, built by the
[Trading & Research Wing](https://www.tradingrw.com). Ask about a pair in plain
language and it calls 18 typed quantitative tools over MCP, streaming every call
to the screen. It audits risk against hard 1.5x ATR stop floors with a Bear Agent
critique, projects forward price paths from four selectable models, and decodes
live derivatives positioning.

Strat AI is analysis and risk tooling. It does not execute trades, hold funds, or
provide financial advice. The exchange interface is strictly read-only.

## What it does

- **Conversational market analysis.** Ask about a pair in plain language. The
  reasoning loop calls 18 typed quantitative tools over MCP and every payload is
  contract-validated before the model reads it, so the model reasons about
  measurements rather than authoring them.
- **Pre-trade risk audit.** Enforces a stop-loss floor of at least 1.5x ATR(14)
  and a minimum reward-to-risk ratio of 1:1.3 intraday, 1:2 swing, positional
  and perpetuals. Setups below the floor are rejected with a machine-readable
  reason tag, not quietly resized. The validator is implemented twice, in Rust
  and in Python, with identical constants.
- **Ghost Line projections.** Eight projection engines, four user-selectable:
  OLS, volume-weighted linear regression, a volume-weighted quadratic solved by
  Gaussian elimination with partial pivoting, and a regime-conditioned drift
  forecast. All four use a 50-bar window pinned to the same constant the agent's
  tools use.
- **Anomaly surveillance.** A 2% absolute move on a 10-minute candle triggers
  generated commentary carrying a headline, a written analysis, and a sentiment
  assessment, broadcast live to the terminal around the clock.
- **Fused Conviction Score (1-100).** A relative ranking of setup quality, not a
  probability or a return forecast. The base blend weights technical momentum at
  70% and news sentiment at 30%, and inverts to 30/70 above sentiment conviction 85.
- **Conflict guardrail.** When a strongly bearish technical read meets strongly
  bullish sentiment, the blended conviction is pulled 60% toward neutral. The
  rule is asymmetric, applies in that direction only, and is suppressed while
  the 30/70 inversion is active. It is not a hard forced HOLD.
- **Multi-agent research loop.** Bull Agent, Bear Agent, and Judge Agent debate
  the same setup under LangGraph orchestration; QA mode exposes every
  intermediate reasoning step for inspection. The Bull, Bear, and VERIFY critic
  receive a read-only tool binding and cannot commit a trade.
- **Chart pattern engine.** 26 completed pattern labels across five categories
  (8 reversal, 6 continuation, 4 bilateral, 5 harmonic, 3 institutional), each
  with a derived confidence and a volume-validation verdict, plus a separate
  pass reporting patterns still forming.
- **Perpetual derivatives analytics.** Funding rates and funding velocity,
  open interest buildup quadrants, liquidation clusters, long/short ratio,
  perpetual basis (premium vs spot), and order-book imbalance for BTC, ETH,
  and major USDT-margined perpetuals.
- **Order flow and volume profile.** Tick-level order flow imbalance signed by
  the tick rule, footprint bid/ask volume per price level, and volume profile
  point of control and value area.
- **Honest failure.** Values that could not be measured are emitted as null, and
  a state that could not be measured reports UNAVAILABLE rather than NEUTRAL.
- **Zero custody.** The exchange seam exposes quotes, instruments, and search
  only, and API keys require read-only scope. There is no order-placement or
  withdrawal method, and a scope-boundary test asserts that every such method
  name is absent from the codebase.

## Co-Pilot modes

| Mode   | What it does                                                                                                                                               |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FIND   | 15-step setup evaluation across macro trend, volume profile POC, market regime, and 26 chart pattern labels.                                               |
| VERIFY | Pre-trade risk audit enforcing the 1.5x ATR stop floor, with Bear Agent critique. Five deterministic checks in fixed order, stopping at the first failure. |
| DEBATE | Structured Bull vs Bear debate with Judge conviction scoring. Consensus is arithmetic; a contested debate takes a fixed penalty.                           |
| QA     | Interactive glass-box auditing of each research step. A committed decision stays immutable while it is interrogated.                                       |

## Who it is for

Traders, quant analysts, and risk managers working crypto spot pairs and
perpetual futures.

## Platform

Desktop terminal built with Tauri and React for macOS, Windows, and Linux.
Reasoning plane is FastAPI with LangGraph. Currently in private beta.

## Pricing

Credit-based monthly subscriptions in INR. See
[pricing.md](https://www.stratai.live/pricing.md) for machine-readable plans or
the [pricing page](https://www.stratai.live/pricing).

## Frequently asked

**What exactly is Strat AI?** A market analysis and pre-trade risk adjudication
terminal for crypto spot pairs and perpetual futures. It provides multi-agent
research evaluation, deterministic risk verification, derivatives positioning
decoders, and unified conviction scores.

**Is this financial advice or trade execution?** No. Strat AI is a quantitative
research and market analysis terminal. It does not execute trades, manage funds,
or provide financial advice, and the exchange interface is read-only.

**What markets does it cover?** Crypto spot pairs and perpetual futures only.
Equities (Indian or US), forex, commodities, and crypto options are out of scope.

**How does the conviction score work?** Technical momentum and news sentiment
are fused into a relative 1-100 setup ranking. The base weighting is 70/30, but
inverts to 30/70 when sentiment conviction exceeds 85. A separate asymmetric
conflict rule pulls the blended score 60% toward neutral when a strongly bearish
technical read meets strongly bullish sentiment. The score is not a probability,
a win rate, or a return forecast.

**Do you publish win rates or backtests?** No. Total return, win rate, maximum
drawdown, and average conviction were deliberately removed from the dashboard
and no endpoint exposes them. The terminal reports setups audited, setups
rejected, and forced holds, with an em-dash wherever something has not been
measured.

**Does Strat AI trade on-chain or connect to DeFi?** No. Strat AI reads market
data from exchange streams with read-only API keys. It has no wallet, no
order-placement or withdrawal method, and no DeFi or on-chain execution.

## For agents

- [llms.txt](https://www.stratai.live/llms.txt) — navigation index with
  when-to-use guidance.
- [agents.md](https://www.stratai.live/agents.md) — tool schemas and call
  examples.
- [MCP server](https://www.stratai.live/api/mcp) — Streamable HTTP JSON-RPC, no
  auth required.
- [Server card](https://www.stratai.live/.well-known/mcp/server-card.json)
- [Resource catalog](https://www.stratai.live/.well-known/ard.json)

## Links

- Get access: <https://www.stratai.live/waitlist>
- About: <https://www.stratai.live/about>
- Blog: <https://www.stratai.live/blog>
- Changelog: <https://www.stratai.live/changelog>
- Contact: <https://www.stratai.live/contact>
- AI disclosure: <https://www.stratai.live/ai-disclosure>
- Support: support@stratai.live
