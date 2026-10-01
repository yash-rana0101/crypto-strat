// Replay order matches the supplied product screenshot; all results are illustrative.
export const demoTools = [
  {
    label: 'Read Multi TF Trend',
    name: 'get_multi_tf_trend',
    result: '1H ↓ · 4H ↓ · 1D ↓ — bearish alignment',
    icon: 'trending-up',
  },
  {
    label: 'Read Consensus Report',
    name: 'get_consensus_report',
    result: 'ATR(14) 6.90 · price below VWAP 3027.70',
    icon: 'bar-chart',
  },
  {
    label: 'Read Market Regime',
    name: 'get_market_regime',
    result: 'Trending market · bearish bias in the sample snapshot',
    icon: 'compass',
  },
  {
    label: 'Read Relative Strength',
    name: 'get_relative_strength',
    result: 'Sample pair underperforms BTC',
    icon: 'chart',
  },
  {
    label: 'Read Session Context',
    name: 'get_session_context',
    result: 'Near the 8-hour funding window · watch liquidity into the UTC close',
    icon: 'clock',
  },
  {
    label: 'Read Event Risk',
    name: 'get_event_risk',
    result: 'No scheduled event flagged in the fixed sample calendar',
    icon: 'alert-triangle',
  },
  {
    label: 'Read Support Resistance',
    name: 'get_support_resistance',
    result: 'R1 2905.80 · S3 2897.80 · example entry below resistance',
    icon: 'target',
  },
  {
    label: 'Read Volume Profile',
    name: 'get_volume_profile',
    result: 'POC 3005.90 · low-volume node 2913.10',
    icon: 'layers',
  },
  {
    label: 'Read Chart Patterns',
    name: 'get_chart_patterns',
    result: 'Triple top 0.90 · inverse cup & handle 0.73',
    icon: 'chart',
  },
  {
    label: 'Read Forecast',
    name: 'get_forecast',
    result: 'Illustrative forecast leans down · projection, not a guarantee',
    icon: 'trending-up',
  },
  {
    label: 'Read Prediction',
    name: 'get_prediction',
    result: 'Secondary projection agrees with the bearish sample bias',
    icon: 'cpu',
  },
] as const;

// The registry has 16 analysis tools and 2 controls; not every tool runs in every mode.
export const toolLibrary = [
  ...demoTools.map((tool) => ({
    name: tool.name,
    label: tool.label,
    scope: 'In this replay',
  })),
  { name: 'get_candles', label: 'Read Candles', scope: 'Analysis' },
  { name: 'get_news_context', label: 'Read News Context', scope: 'Analysis' },
  { name: 'get_order_flow', label: 'Read Order Flow', scope: 'Analysis' },
  {
    name: 'get_derivatives_analytics',
    label: 'Read Derivatives Analytics',
    scope: 'Perpetuals',
  },
  {
    name: 'get_trade_performance',
    label: 'Read Trade Performance',
    scope: 'Analysis',
  },
  {
    name: 'watch_price_condition',
    label: 'Watch Price Condition',
    scope: 'Control · not replayed',
  },
  {
    name: 'declare_trade',
    label: 'Declare Trade',
    scope: 'Control · not replayed',
  },
];

export const graphTools = [
  {
    label: 'Multi-TF trend',
    detail: 'Macro alignment',
    icon: 'trending-up',
    className: 'tool-trend',
  },
  {
    label: 'Consensus report',
    detail: 'Indicators & ATR',
    icon: 'bar-chart',
    className: 'tool-structure',
  },
  {
    label: 'Market regime',
    detail: 'Trend & volatility',
    icon: 'compass',
    className: 'tool-risk',
  },
] as const;
