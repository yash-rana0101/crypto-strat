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
      <p className="ready-title">Market analysis is ready</p>
      <p className="ready-description">
        Tap Find Trade to explore a sample setup.
      </p>
    </div>
  );
}
