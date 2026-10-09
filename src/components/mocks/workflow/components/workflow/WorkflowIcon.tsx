import type { SVGProps } from 'react';

export type WorkflowIconName =
  | 'agent'
  | 'database'
  | 'trend'
  | 'external'
  | 'candlesticks'
  | 'volume-group'
  | 'set-context'
  | 'price-action'
  | 'liquidity'
  | 'volume-profile'
  | 'momentum'
  | 'market-regime'
  | 'relative-strength'
  | 'options-chain'
  | 'trade-validation'
  | 'volatility'
  | 'signal-consensus'
  | 'levels-analysis'
  | 'agent-response'
  | 'risk-reward'
  | 'greeks-funding'
  | 'order-flow'
  | 'support-resistance'
  | 'multi-timeframe'
  | 'spark'
  | 'find-trade'
  | 'verify-trade'
  | 'user-message'
  | 'conviction'
  | 'target-level'
  | 'send'
  | 'next'
  | 'expand'
  | 'collapse'
  | 'caret-down'
  | 'caret-up'
  | 'processing'
  | 'complete'
  | 'pending'
  | 'standalone-check'
  | 'cellular-signal'
  | 'wifi'
  | 'battery'
  | 'live-status'
  | 'ready-market'
  | 'flow-arrow';

type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  name: WorkflowIconName;
};

const iconPaths: Record<WorkflowIconName, React.ReactNode> = {
  agent: (
    <>
      <path d="M12 3v2.5M10.5 3a1.5 1.5 0 1 1 3 0" />
      <path d="M7 7.5h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z" />
      <path d="M4 11H2.5v5H4M20 11h1.5v5H20M8.5 13h.01M15.5 13h.01M8.5 16.5h7" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  trend: (
    <>
      <path d="M4 19h16M4.5 15.5l5-5 3.5 3.5 6.5-7" />
      <path d="M15.5 7h4v4" />
    </>
  ),
  external: <path d="M10 5h9v9M19 5l-9.5 9.5M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4" />,
  candlesticks: (
    <>
      <path d="M6 4v4M6 16v4M12 3.5V6M12 11v7M18 7v5M18 18v2.5" />
      <rect x="4" y="8" width="4" height="8" rx=".7" />
      <rect x="10" y="6" width="4" height="5" rx=".7" />
      <rect x="16" y="12" width="4" height="6" rx=".7" />
    </>
  ),
  'volume-group': <path d="M3 20h18M5 20V12h3v8M10.5 20V5h3v15M16 20V9h3v11" />,
  'set-context': (
    <>
      <path d="M3.5 6h3M10.5 6h10M3.5 12h10M17.5 12h3M3.5 18h5M12.5 18h8" />
      <circle cx="8.5" cy="6" r="2" />
      <circle cx="15.5" cy="12" r="2" />
      <circle cx="10.5" cy="18" r="2" />
    </>
  ),
  'price-action': <path d="M3.5 18l4-6 4 3 4-7 5-4M16 4h4.5v4.5" />,
  liquidity: <path d="M12 3.5c-2 3-6.5 7.8-6.5 11a6.5 6.5 0 0 0 13 0c0-3.2-4.5-8-6.5-11ZM8.5 15h7" />,
  'volume-profile': <path d="M4 3.5v17M4 5h7v3H4M4 10.5h16v3H4M4 16h11v3H4" />,
  momentum: <path d="M3.5 19l5-2 4-4 4-7H21M17.5 3l3.5 3-3.5 3" />,
  'market-regime': (
    <>
      <circle cx="6" cy="12" r="2" />
      <path d="M8 12h4M12 12V5h4M12 12h4M12 12v7h4M17.5 6l3-3M17.5 12h3M17.5 19l1-2 2 3" />
    </>
  ),
  'relative-strength': <path d="M3.5 20h17M5 20l4-7 5-2 6-7M5 20l5-2 4-3 6-1" />,
  'options-chain': (
    <>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1.2" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="1.2" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="1.2" />
      <rect x="14.5" y="14.5" width="6" height="6" rx="1.2" />
      <path d="M9.5 6.5h5M9.5 17.5h5M6.5 9.5v5M17.5 9.5v5" />
    </>
  ),
  'trade-validation': <path d="M12 3.5l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8v-6l7-3ZM8.5 12l2.5 2.5 4.5-5" />,
  volatility: <path d="M3.5 5v14M20.5 5v14M6 12h2l2-6 4 12 2-6h2" />,
  'signal-consensus': <path d="M3 5h5l5 7M3 12h10M3 19h5l5-7M15 12l2 2 4-5" />,
  'levels-analysis': <path d="M3 6h18M3 18h18M4 15l4-5 4 4 4-6 4 2" />,
  'agent-response': <path d="M13 17H8l-4 3v-3.5a2 2 0 0 1-1-1.7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M7 9h8M14 14h7M18 11l3 3-3 3" />,
  'risk-reward': (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M3.5 8v8M20.5 8v8M4 12h5M15 12h5M6 10l-2 2 2 2M18 10l2 2-2 2" />
    </>
  ),
  'greeks-funding': <path d="M8.5 5L3 19h11L8.5 5ZM16 7h5M18.5 4.5v5M16 16h5" />,
  'order-flow': (
    <>
      <circle cx="5" cy="12" r="2" />
      <circle cx="18.5" cy="5.5" r="2" />
      <circle cx="18.5" cy="18.5" r="2" />
      <path d="M7 12h4l5.7-5.2M11 12l5.7 5.2M12 17l4.7.2-.2-4.7" />
    </>
  ),
  'support-resistance': <path d="M3 5h18M3 19h18M4 15l4-8 4 10 4-10 4 6" />,
  'multi-timeframe': <path d="M3.5 4v16.5H21M6 12l4-3 4 2 6-6M6 17l4-2 4 1 6-4" />,
  spark: <path d="M10 4l2 6 6 2-6 2-2 6-2-6-5-2 5-2 2-6ZM18.5 3l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />,
  'find-trade': <path d="M3.5 19l4.5-3 3-5 3 2M17 3.5l-4 6h4l-1 5 5-7h-4l1-4Z" />,
  'verify-trade': <path d="M12 4l6.5 2.8v5.7c0 3.6-2.8 6-6.5 7.5-3.7-1.5-6.5-3.9-6.5-7.5V6.8L12 4ZM9 12l2 2 4-4" />,
  'user-message': <path d="M20.5 11.5a8.5 8 0 0 1-8.5 8 10 10 0 0 1-3.5-.6l-5 1.6 1.5-4a7.7 7.7 0 0 1-1.5-5 8.5 8 0 0 1 17 0ZM8 9.5h8M8 13.5h5" />,
  conviction: <path d="M5.5 19a9 9 0 1 1 13 0M7 17v-4h2v4M11 17v-7h2v7M15 17V7h2v10" />,
  'target-level': (
    <>
      <circle cx="14" cy="12" r="4" />
      <path d="M3.5 12h17M14 6v2M14 16v2" />
    </>
  ),
  send: <path d="M3.5 10L20.5 3.5 14 20.5 11 13 3.5 10ZM11 13l9.5-9.5" />,
  next: <path d="M9.5 6l6 6-6 6" />,
  expand: <path d="M12 5v14M5 12h14" />,
  collapse: <path d="M5 12h14" />,
  'caret-down': <path d="M6 9.5l6 5 6-5" />,
  'caret-up': <path d="M6 14.5l6-5 6 5" />,
  processing: <path d="M19.5 15a8 8 0 1 1-15-6M9 4.5A8 8 0 0 1 19.5 9M17 6.2A8 8 0 0 1 19.5 9" />,
  complete: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12l2.5 2.5L16 9" />
    </>
  ),
  pending: <circle cx="12" cy="12" r="8.5" />,
  'standalone-check': <path d="M6.5 12l3.5 3.5 7.5-7.5" />,
  'cellular-signal': (
    <>
      <rect x="3.5" y="16" width="2.5" height="4.5" rx=".7" />
      <rect x="8.3" y="12" width="2.5" height="8.5" rx=".7" />
      <rect x="13.1" y="8" width="2.5" height="12.5" rx=".7" />
      <rect x="17.9" y="4" width="2.5" height="16.5" rx=".7" />
    </>
  ),
  wifi: (
    <>
      <path d="M3.5 8a13 13 0 0 1 17 0M7 12a7.6 7.6 0 0 1 10 0" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7.5" width="16" height="9" rx="1.5" />
      <path d="M21 10v4" />
      <rect x="5.5" y="10" width="9" height="4" rx=".5" fill="currentColor" stroke="none" />
    </>
  ),
  'live-status': (
    <>
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  'ready-market': (
    <>
      <path d="M4 4v16h16M4 12h16M12 4v16M6 16l4-4 4 2 4-6M7 5v4M6 6.5h2M17 15v5M16 17h2" />
      <circle cx="6" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  'flow-arrow': <path d="M9 7l7 5-7 5Z" fill="currentColor" stroke="none" />,
};

export default function WorkflowIcon({
  name,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden ?? true}
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}