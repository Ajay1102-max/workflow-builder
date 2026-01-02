// src/core/workflow.ts

import {
  jsonToArray,
  arrayToJson,
  arrayMapping,
} from "./transformers";

interface Node {
  id: string;
  type: string;
}

interface Edge {
  source: string;
  target: string;
}

export function executeWorkflow(
  nodes: Node[],
  edges: Edge[],
  inputData: any
) {
  let currentData = inputData;

  // Entry node dhundhna
  const entryNode = nodes.find((n) => n.type === "entry");
  if (!entryNode) {
    throw new Error("Entry node not found");
  }

  let currentNode = entryNode;

  // Linear traversal
  while (true) {
    const edge = edges.find((e) => e.source === currentNode.id);
    if (!edge) break;

    const nextNode = nodes.find((n) => n.id === edge.target);
    if (!nextNode) break;

    switch (nextNode.type) {
      case "jsonToArray":
        currentData = jsonToArray(currentData);
        break;

      case "arrayToJson":
        currentData = arrayToJson(currentData);
        break;

      case "arrayMapping":
        currentData = arrayMapping(currentData);
        break;

      case "exit":
        return currentData;
    }

    currentNode = nextNode;
  }

  return currentData;
}
