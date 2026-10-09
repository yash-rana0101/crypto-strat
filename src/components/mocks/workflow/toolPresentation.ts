import type { WorkflowIconName } from './components/workflow/WorkflowIcon';

export const toolPresentation: { label: string; icon: WorkflowIconName }[] = [
  { label: 'Multi-timeframe trend', icon: 'multi-timeframe' },
  { label: 'Signal consensus', icon: 'signal-consensus' },
  { label: 'Market regime', icon: 'market-regime' },
  { label: 'Volume profile', icon: 'volume-profile' },
  { label: 'Support & resistance', icon: 'support-resistance' },
  { label: 'ATR & volatility', icon: 'volatility' },
  { label: 'Momentum', icon: 'momentum' },
  { label: 'Relative strength', icon: 'relative-strength' },
  { label: 'Market liquidity', icon: 'liquidity' },
  { label: 'Trade validation', icon: 'trade-validation' },
  { label: 'Risk / reward', icon: 'risk-reward' },
  { label: 'Derivatives positioning', icon: 'options-chain' },
  { label: 'Funding & open interest', icon: 'greeks-funding' },
  { label: 'Candlestick data', icon: 'candlesticks' },
  { label: 'Order flow', icon: 'order-flow' },
  { label: 'Price action', icon: 'price-action' },
  { label: 'Set context', icon: 'set-context' },
  { label: 'Agent response', icon: 'agent-response' },
];
