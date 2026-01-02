// frontend/src/components/nodes/JsonToArrayNode.tsx

import { Handle, Position } from "reactflow";

interface JsonToArrayNodeProps {
  data: {
    label: string;
  };
}

const JsonToArrayNode = ({ data }: JsonToArrayNodeProps) => {
  return (
    <div className="px-4 py-3 rounded border-2 border-blue-500 bg-blue-50 text-sm">
      <strong className="text-blue-700 block mb-1">
        {data.label}
      </strong>

      <div className="text-xs text-gray-600 mb-2">
        JSON → Array
      </div>

      {/* Input */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-blue-600"
      />

      {/* Output */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-blue-600"
      />
    </div>
  );
};

export default JsonToArrayNode;
