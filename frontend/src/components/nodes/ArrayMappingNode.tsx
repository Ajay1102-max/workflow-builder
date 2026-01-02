// frontend/src/components/nodes/ArrayMappingNode.tsx

import { Handle, Position } from "reactflow";

interface ArrayMappingNodeProps {
  data: {
    label: string;
  };
}

const ArrayMappingNode = ({ data }: ArrayMappingNodeProps) => {
  return (
    <div className="px-4 py-3 rounded border-2 border-orange-500 bg-orange-50 text-sm">
      <strong className="text-orange-700 block mb-1">
        {data.label}
      </strong>

      <div className="text-xs text-gray-600 mb-2">
        Array Mapping
      </div>

      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-orange-600"
      />

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-orange-600"
      />
    </div>
  );
};

export default ArrayMappingNode;
