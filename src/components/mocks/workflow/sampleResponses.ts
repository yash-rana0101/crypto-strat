export type SampleTrade = {
  id: number;
  symbol: string;
  side: 'BUY' | 'SELL';
  entry: number;
  stop: number;
  target: number;
  atr: number;
  score: number;
  poc: number;
  rsi: number;
  reason: string;
  riskNote: string;
};
export const money = (n: number) => `$${n.toFixed(2)}`;
export const findResponses: SampleTrade[] = [
  {
    id: 1,
    symbol: 'ETHUSDT',
    side: 'SELL',
    entry: 2904.5,
    stop: 2915.5,
    target: 2890,
    atr: 6.9,
    score: 66,
    poc: 2912,
    rsi: 42.8,
    reason: 'Price is below value with bearish 10m and 1h trends.',
    riskNote: 'Watch for a volume breakout above resistance.',
  },
  {
    id: 2,
    symbol: 'BTCUSDT',
    side: 'BUY',
    entry: 64200,
    stop: 63660,
    target: 65280,
    atr: 340,
    score: 78,
    poc: 63980,
    rsi: 61,
    reason: 'A high-volume breakout aligns with bullish intraday trends.',
    riskNote: 'A failed breakout back into the prior range weakens the thesis.',
  },
  {
    id: 3,
    symbol: 'SOLUSDT',
    side: 'SELL',
    entry: 145,
    stop: 147.4,
    target: 140.2,
    atr: 1.5,
    score: 73,
    poc: 146,
    rsi: 39,
    reason:
      'Resistance rejection and negative momentum support bearish continuation.',
    riskNote: 'Watch for a recovery above the rejected resistance zone.',
  },
  {
    id: 4,
    symbol: 'BNBUSDT',
    side: 'BUY',
    entry: 580,
    stop: 575.2,
    target: 589.6,
    atr: 3,
    score: 71,
    poc: 577.6,
    rsi: 57,
    reason:
      'Support held on a pullback while the intraday trend remains bullish.',
    riskNote: 'A support breakdown invalidates the pullback setup.',
  },
  {
    id: 5,
    symbol: 'LTCUSDT',
    side: 'SELL',
    entry: 82,
    stop: 82.6,
    target: 81.1,
    atr: 0.35,
    score: 64,
    poc: 82.3,
    rsi: 44,
    reason:
      'Price trades below value with weak momentum and bearish alignment.',
    riskNote:
      'The neutral daily trend limits conviction; watch for a reversal.',
  },
  {
    id: 6,
    symbol: 'AVAXUSDT',
    side: 'BUY',
    entry: 28,
    stop: 27.6,
    target: 29,
    atr: 0.24,
    score: 82,
    poc: 27.76,
    rsi: 64,
    reason:
      'Positive momentum and relative strength support breakout continuation.',
    riskNote:
      'A loss of momentum near the breakout level could cause a false move.',
  },
  {
    id: 7,
    symbol: 'LINKUSDT',
    side: 'SELL',
    entry: 16.2,
    stop: 16.35,
    target: 15.9,
    atr: 0.09,
    score: 69,
    poc: 16.26,
    rsi: 41,
    reason:
      'A lower high below the volume point of control supports the short bias.',
    riskNote: 'A reclaim of the lower-high zone invalidates this setup.',
  },
  {
    id: 8,
    symbol: 'AAVEUSDT',
    side: 'BUY',
    entry: 170,
    stop: 168.4,
    target: 172.4,
    atr: 0.96,
    score: 62,
    poc: 169.2,
    rsi: 55,
    reason: 'A support bounce and improving momentum suggest a bullish move.',
    riskNote: 'A choppy market can produce repeated false starts.',
  },
  {
    id: 9,
    symbol: 'BCHUSDT',
    side: 'BUY',
    entry: 356,
    stop: 353,
    target: 362,
    atr: 1.8,
    score: 76,
    poc: 354.8,
    rsi: 60,
    reason:
      'Price is above value with positive momentum across intraday timeframes.',
    riskNote: 'A broad-market reversal could undermine the continuation.',
  },
  {
    id: 10,
    symbol: 'ETCUSDT',
    side: 'SELL',
    entry: 22.8,
    stop: 22.98,
    target: 22.44,
    atr: 0.11,
    score: 74,
    poc: 22.88,
    rsi: 38,
    reason: 'Bearish alignment and relative weakness support a downside move.',
    riskNote: 'Watch for a sharp rebound or a market regime change.',
  },
];
// Verification includes three deliberately tight stops to demonstrate failed checks.
export const verifyResponses: SampleTrade[] = findResponses.map((t, i) => ({
  ...t,
  stop: [2, 4, 7].includes(i)
    ? t.entry + (t.side === 'SELL' ? 1 : -1) * t.atr
    : t.stop,
}));
export function metrics(t: SampleTrade) {
  const risk = Math.abs(t.entry - t.stop),
    reward = Math.abs(t.target - t.entry),
    floor = t.atr * 1.5;
  return {
    risk,
    reward,
    floor,
    rr: reward / risk,
    passed: risk >= floor,
    conviction: t.score >= 75 ? 'HIGH' : 'MODERATE',
  };
}
export function measurements(t: SampleTrade) {
  const m = metrics(t),
    bias = t.side === 'BUY' ? 'bullish' : 'bearish';
  return [
    `10m ${bias} · 1h ${bias} · 1D neutral`,
    `${t.score} / 100 · ${m.conviction} conviction`,
    `Trending · ${bias} bias`,
    `POC ${money(t.poc)} · ${t.side === 'BUY' ? 'above' : 'below'} value`,
    `Support ${money(t.side === 'BUY' ? t.stop : t.target)} · resistance ${money(t.side === 'BUY' ? t.target : t.stop)}`,
    `ATR(14) ${money(t.atr)} · floor $${m.floor.toFixed(3)}`,
    `RSI ${t.rsi} · ${t.side === 'BUY' ? 'positive' : 'negative'} momentum`,
    t.side === 'BUY' ? 'Outperforming BTC' : 'Underperforming BTC',
    'Sample liquidity · sufficient volume',
    `Stop ${money(m.risk)} ${m.passed ? '≥' : '<'} $${m.floor.toFixed(3)} · ${m.passed ? 'passed' : 'failed'}`,
    `Reward ${money(m.reward)} / risk ${money(m.risk)} = ${m.rr.toFixed(2)}`,
  ];
}
export function response(t: SampleTrade, mode: string) {
  const m = metrics(t);
  if (mode === 'verify')
    return m.passed
      ? `Sample trade verified: the stop meets the ATR floor. ${t.reason}`
      : `Sample trade needs revision: the stop is too tight for the measured ATR. Minimum distance: $${m.floor.toFixed(3)}. Review the stop and recalculate risk / reward.`;
  return `${t.reason} Sample ${t.side === 'BUY' ? 'long' : 'short'} setup with ${m.conviction.toLowerCase()} conviction and 1 : ${m.rr.toFixed(2)} risk / reward.`;
}
export function reply(q: string, t: SampleTrade, mode: string) {
  const m = metrics(t);
  if (/stop|risk/i.test(q))
    return `The sample stop is ${money(t.stop)}, ${money(m.risk)} from entry. This ${m.passed ? 'meets' : 'fails'} the $${m.floor.toFixed(3)} minimum (1.5 × ATR of ${money(t.atr)}). ${m.passed ? `Risk / reward is 1 : ${m.rr.toFixed(2)} before costs.` : 'Revise the stop before treating this plan as validated.'}`;
  if (/wrong|invalid/i.test(q))
    return `A sustained move ${t.side === 'BUY' ? 'below' : 'above'} ${money(t.stop)} invalidates the ${t.side === 'BUY' ? 'bullish' : 'bearish'} thesis. ${t.riskNote} Liquidation wicks and slippage can exceed the planned stop.`;
  if (/sell|buy|why|trend|trade/i.test(q)) return response(t, mode);
  return `This ${t.symbol} replay explains sample trend, stop loss, risk / reward, and invalidation. It has no live market connection and cannot evaluate new prices.`;
}
export function pickResponse(
  pool: SampleTrade[],
  previousId: number,
  random = Math.random()
) {
  const candidates = pool.filter((t) => t.id !== previousId);
  return candidates[
    Math.min(candidates.length - 1, Math.floor(random * candidates.length))
  ];
}
