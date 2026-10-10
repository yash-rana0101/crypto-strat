import WorkflowIcon from './WorkflowIcon';

export default function ReadyState() {
  return (
    <div className="ready-state">
      <div className="ready-visual" aria-hidden="true">
        <WorkflowIcon className="ready-market" name="ready-market" />
        <div className="ready-brand">
          <img src="/strat.svg" alt="" />
        </div>
      </div>
      <p className="ready-title">Ready to analyze</p>
      <p className="ready-description">
        Tap Find Trade for a sample setup.
      </p>
    </div>
  );
}
