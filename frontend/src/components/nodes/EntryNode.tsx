// frontend/src/components/nodes/EntryNode.tsx

import { Handle, Position } from "reactflow";

interface EntryNodeProps {
  data: {
    label: string;
  };
}

const EntryNode = ({ data }: EntryNodeProps) => {
  return (
    <div className="inline-block px-4 py-2 rounded border-2 border-green-500 bg-green-50 text-sm shadow">
      <strong className="text-green-700">{data.label}</strong>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-green-600"
      />
    </div>
  );
};

export default EntryNode;
