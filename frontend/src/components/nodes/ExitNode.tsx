// frontend/src/components/nodes/ExitNode.tsx

import { Handle, Position } from "reactflow";

interface ExitNodeProps {
  data: {
    label: string;
  };
}

const ExitNode = ({ data }: ExitNodeProps) => {
  return (
    <div className="px-4 py-2 rounded border-2 border-red-500 bg-red-50 text-sm">
      <strong className="text-red-700">{data.label}</strong>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-red-600"
      />
    </div>
  );
};

export default ExitNode;
