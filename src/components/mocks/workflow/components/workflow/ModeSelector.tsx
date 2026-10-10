import { useEffect, useRef, useState } from 'react';
import WorkflowIcon from './WorkflowIcon';
import type { WorkflowController } from './useWorkflowDemo';

export default function ModeSelector({ demo }: { demo: WorkflowController }) {
  const { mode, selectMode, running, run } = demo;
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const menuTrigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  const choose = (nextMode: 'find' | 'verify') => {
    if (nextMode !== mode) selectMode(nextMode);
    setOpen(false);
    menuTrigger.current?.focus();
  };

  return (
    <div
      className="analysis-mode"
      ref={container}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          menuTrigger.current?.focus();
        }
      }}
    >
      <div className="analysis-mode-trigger">
        <button
          id="analysis-mode-trigger"
          className="analysis-mode-action"
          type="button"
          disabled={running}
          aria-busy={running && mode === 'find'}
          onClick={() => {
            if (mode === 'find') run('find');
            else
              document
                .querySelector<HTMLInputElement>('#verify-panel input')
                ?.focus();
          }}
        >
          <WorkflowIcon
            name={
              running && mode === 'find'
                ? 'processing'
                : mode === 'find'
                  ? 'find-trade'
                  : 'verify-trade'
            }
            className={running && mode === 'find' ? 'analysis-mode-spinner' : ''}
          />
          {mode === 'find'
            ? running
              ? 'SCANNING…'
              : 'FIND TRADE'
            : 'VERIFY TRADE'}
        </button>
        <button
          ref={menuTrigger}
          className="analysis-mode-caret"
          type="button"
          aria-label="Choose analysis mode"
          aria-expanded={open}
          aria-controls="analysis-mode-options"
          disabled={running}
          onClick={() => setOpen(!open)}
        >
          <WorkflowIcon name={open ? 'caret-up' : 'caret-down'} />
        </button>
      </div>
      {open && (
        <div
          id="analysis-mode-options"
          className="analysis-mode-options"
          aria-label="Analysis mode"
        >
          <button
            type="button"
            aria-pressed={mode === 'find'}
            onClick={() => choose('find')}
            disabled={running}
          >
            <WorkflowIcon name="find-trade" />
            <span>
              Find a trade
              <small>Scan market signals</small>
            </span>
          </button>
          <button
            type="button"
            aria-pressed={mode === 'verify'}
            onClick={() => choose('verify')}
            disabled={running}
          >
            <WorkflowIcon name="verify-trade" />
            <span>
              Verify a trade
              <small>Check your risk</small>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
