// frontend/src/components/nodes/ArrayToJsonNode.tsx

import { Handle, Position } from "reactflow";

interface ArrayToJsonNodeProps {
  data: {
    label: string;
  };
}

const ArrayToJsonNode = ({ data }: ArrayToJsonNodeProps) => {
  return (
    <div className="px-4 py-3 rounded border-2 border-purple-500 bg-purple-50 text-sm">
      <strong className="text-purple-700 block mb-1">
        {data.label}
      </strong>

      <div className="text-xs text-gray-600 mb-2">
        Array → JSON
      </div>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-purple-600"
      />

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-purple-600"
      />
    </div>
  );
};

export default ArrayToJsonNode;
