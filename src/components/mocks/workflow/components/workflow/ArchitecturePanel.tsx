import ArchitectureGraph from './ArchitectureGraph';

import type { WorkflowController } from './useWorkflowDemo';
export default function ArchitecturePanel({
  demo,
}: {
  demo: WorkflowController;
}) {
  return (
    <div className="architecture">
      <ArchitectureGraph demo={demo} />
    </div>
  );
}
