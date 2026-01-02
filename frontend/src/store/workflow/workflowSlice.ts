import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Node, Edge } from "reactflow";

interface WorkflowState {
  nodes: Node[];
  edges: Edge[];
}

const initialState: WorkflowState = {
  nodes: [],
  edges: [],
};

const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    setNodes(state, action: PayloadAction<Node[]>) {
      state.nodes = action.payload;
    },
    setEdges(state, action: PayloadAction<Edge[]>) {
      state.edges = action.payload;
    },
    resetWorkflow(state) {
      state.nodes = [];
      state.edges = [];
    },
  },
});

export const { setNodes, setEdges, resetWorkflow } =
  workflowSlice.actions;

export default workflowSlice.reducer;
