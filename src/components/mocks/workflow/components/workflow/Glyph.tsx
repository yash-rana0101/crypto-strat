import WorkflowIcon, { type WorkflowIconName } from './WorkflowIcon';

const icons: Record<string, WorkflowIconName> = {
  spark: 'spark',
  trend: 'trend',
  volume: 'conviction',
  levels: 'target-level',
  agent: 'agent',
  data: 'database',
  shield: 'verify-trade',
  chat: 'user-message',
  grid: 'ready-market',
  options: 'set-context',
  candles: 'candlesticks',
  send: 'send',
  external: 'external',
  next: 'next',
  plus: 'expand',
  minus: 'collapse',
};

export default function Glyph({ kind }: { kind: string }) {
  return (
    <WorkflowIcon
      name={icons[kind] ?? 'spark'}
      className={`glyph ${kind}`}
      width="1em"
      height="1em"
      focusable="false"
    />
  );
}
