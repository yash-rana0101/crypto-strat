import { names } from './constants';
import { toolPresentation } from '../../toolPresentation';
import WorkflowIcon from './WorkflowIcon';
import type { WorkflowController } from './useWorkflowDemo';

export default function ToolFeed({ demo }: { demo: WorkflowController }) {
  const { mode, step, running, thinking, feed, result, data, trade } = demo;
  if (step === -2) return null;
  const visibleTools = names.slice(
    0,
    Math.max(0, Math.min(names.length, step + 1))
  );
  const toolRows = (
      <div className="feed-rows" ref={feed}>
        {visibleTools.map((name, index) => {
          const icon = toolPresentation[index].icon;
          const completed = step > index;
          const active = step === index;
          const failed = completed && index === 9 && !result.passed;
          return (
            <div
              key={name}
              className={`feed-row ${completed ? 'done' : active ? 'working' : 'pending'} ${failed ? 'check-failed' : ''}`}
            >
              <span className="chat-tool-icon">
                <WorkflowIcon name={icon} />
              </span>
              <div className="chat-tool-copy">
                <span className="feed-tool-label">
                  {mode === 'verify' && index === 9
                    ? 'Check your levels'
                    : name}
                </span>
                <small>
                  {completed ? data[index] : `${trade.symbol} · 10m`}
                </small>
              </div>
              <span
                className="status-icon"
                aria-label={
                  failed
                    ? 'Validation failed'
                    : completed
                      ? 'Complete'
                      : active
                        ? 'Running'
                        : 'Pending'
                }
              >
                <WorkflowIcon
                  name={completed ? 'complete' : active ? 'processing' : 'pending'}
                  className={active ? 'chat-spinner' : undefined}
                />
              </span>
            </div>
          );
        })}
      </div>
  );
  return (
    <div className="feed">
      {step >= 12 && !running ? (
        <details className="completed-checks">
          <summary>
            {names.length} checks complete{!result.passed && ' · Risk check failed'}
          </summary>
          {toolRows}
        </details>
      ) : (
        <>
          <div className="feed-heading">
            <span>{mode === 'find' ? 'MARKET SCAN' : 'RISK CHECK'}</span>
            <span>{thinking ? 'THINKING' : 'SCANNING'}</span>
          </div>
          {toolRows}
        </>
      )}
      {(running || thinking) && (
        <div className="chat-working-status">
          <WorkflowIcon name="processing" className="chat-spinner" />
          <span>{running ? 'Working…' : 'Thinking…'}</span>
        </div>
      )}
    </div>
  );
}
