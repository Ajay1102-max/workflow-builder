import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import type { NodeChange, EdgeChange, Connection } from "reactflow";
import { useCallback } from "react";
import "reactflow/dist/style.css";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { setNodes, setEdges } from "../store/workflow";

import EntryNode from "./nodes/EntryNode";
import ExitNode from "./nodes/ExitNode";
import JsonToArrayNode from "./nodes/JsonToArrayNode";
import ArrayToJsonNode from "./nodes/ArrayToJsonNode";

import axios from "axios";

/* ---------------- Node Types ---------------- */
const nodeTypes = {
  entry: EntryNode,
  exit: ExitNode,
  jsonToArray: JsonToArrayNode,
  arrayToJson: ArrayToJsonNode,
};

/* ---------------- Initial Data ---------------- */
const initialNodes = [
  { id: "1", type: "entry", position: { x: 100, y: 200 }, data: { label: "Entry" } },
  { id: "2", type: "jsonToArray", position: { x: 300, y: 200 }, data: { label: "JSON → Array" } },
  { id: "3", type: "arrayToJson", position: { x: 550, y: 200 }, data: { label: "Array → JSON" } },
  { id: "4", type: "exit", position: { x: 800, y: 200 }, data: { label: "Exit" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
];

const WorkflowCanvas = () => {
  const dispatch = useDispatch<AppDispatch>();

  const storedNodes = useSelector((state: RootState) => state.workflow.nodes);
  const storedEdges = useSelector((state: RootState) => state.workflow.edges);

  /* ✅ PROPER local state */
  const [nodes, setNodesLocal, onNodesChangeRF] = useNodesState(
    storedNodes.length ? storedNodes : initialNodes
  );
  const [edges, setEdgesLocal, onEdgesChangeRF] = useEdgesState(
    storedEdges.length ? storedEdges : initialEdges
  );

  /* ✅ Nodes sync */
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodesLocal((nds) => {
        dispatch(setNodes(nds));
        return nds;
      });
      onNodesChangeRF(changes);
    },
    [dispatch, onNodesChangeRF]
  );

  /* ✅ Edges sync */
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdgesLocal((eds) => {
        dispatch(setEdges(eds));
        return eds;
      });
      onEdgesChangeRF(changes);
    },
    [dispatch, onEdgesChangeRF]
  );

  /* ✅ New connection */
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdgesLocal((eds) => {
        const updated = addEdge(connection, eds);
        dispatch(setEdges(updated));
        return updated;
      });
    },
    [dispatch]
  );

  /* ---------------- SAVE TO BACKEND ---------------- */
  const handleSaveWorkflow = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/workflows", {
        name: "Workflow from UI",
        nodes,
        edges,
      });

      console.log("Saved:", res.data);
      alert("✅ Workflow saved to MongoDB");
    } catch (error: any) {
      console.error("SAVE ERROR ❌", error.response?.data || error);
      alert("❌ Failed to save workflow (check backend)");
    }
  };

  return (
    <div className="w-full h-screen relative">
      <button
        onClick={handleSaveWorkflow}
        className="absolute top-4 right-4 z-10 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save Workflow
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
