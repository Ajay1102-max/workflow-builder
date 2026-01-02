// frontend/src/core/validator.ts

interface Node {
  id: string;
  type: string;
}

interface Edge {
  source: string;
  target: string;
}

export function validateWorkflow(nodes: Node[], edges: Edge[]): string[] {
  const errors: string[] = [];

  // 1️⃣ Entry node check
  const entryNodes = nodes.filter((n) => n.type === "entry");
  if (entryNodes.length === 0) {
    errors.push("Workflow must have at least one Entry node.");
  }

  // 2️⃣ Exit node check
  const exitNodes = nodes.filter((n) => n.type === "exit");
  if (exitNodes.length === 0) {
    errors.push("Workflow must have at least one Exit node.");
  }

  // 3️⃣ Orphan nodes (not connected)
  nodes.forEach((node) => {
    const connected = edges.some(
      (e) => e.source === node.id || e.target === node.id
    );

    if (!connected) {
      errors.push(`Node "${node.id}" is not connected.`);
    }
  });

  // 4️⃣ Circular dependency check (DFS)
  const graph: Record<string, string[]> = {};

  nodes.forEach((node) => {
    graph[node.id] = [];
  });

  edges.forEach((edge) => {
    graph[edge.source].push(edge.target);
  });

  const visited = new Set<string>();
  const stack = new Set<string>();

  function hasCycle(nodeId: string): boolean {
    if (stack.has(nodeId)) return true;
    if (visited.has(nodeId)) return false;

    visited.add(nodeId);
    stack.add(nodeId);

    for (const neighbour of graph[nodeId]) {
      if (hasCycle(neighbour)) return true;
    }

    stack.delete(nodeId);
    return false;
  }

  for (const node of nodes) {
    if (hasCycle(node.id)) {
      errors.push("Workflow contains circular dependency.");
      break;
    }
  }

  return errors;
}