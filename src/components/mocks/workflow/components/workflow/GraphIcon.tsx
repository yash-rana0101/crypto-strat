import WorkflowIcon, { type WorkflowIconName } from './WorkflowIcon';

export type GraphIconKind =
  | 'chat'
  | 'agent'
  | 'data'
  | 'trend'
  | 'volume'
  | 'levels'
  | 'timeframes'
  | 'consensus'
  | 'regime'
  | 'volumeProfile'
  | 'support'
  | 'volatility'
  | 'momentum'
  | 'strength'
  | 'liquidity'
  | 'validation'
  | 'riskReward'
  | 'optionsChain'
  | 'greeks'
  | 'candles'
  | 'orderFlow'
  | 'priceAction'
  | 'setContext'
  | 'response';

const icons: Record<GraphIconKind, WorkflowIconName> = {
  chat: 'user-message',
  agent: 'agent',
  data: 'database',
  trend: 'trend',
  volume: 'volume-group',
  levels: 'levels-analysis',
  timeframes: 'multi-timeframe',
  consensus: 'signal-consensus',
  regime: 'market-regime',
  volumeProfile: 'volume-profile',
  support: 'support-resistance',
  volatility: 'volatility',
  momentum: 'momentum',
  strength: 'relative-strength',
  liquidity: 'liquidity',
  validation: 'trade-validation',
  riskReward: 'risk-reward',
  optionsChain: 'options-chain',
  greeks: 'greeks-funding',
  candles: 'candlesticks',
  orderFlow: 'order-flow',
  priceAction: 'price-action',
  setContext: 'set-context',
  response: 'agent-response',
};

export default function GraphIcon({ kind }: { kind: GraphIconKind }) {
  return (
    <WorkflowIcon
      name={icons[kind]}
      className={`glyph graph-icon graph-icon-${kind}`}
      width="1em"
      height="1em"
      focusable="false"
    />
  );
}
