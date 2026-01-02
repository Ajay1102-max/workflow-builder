import WorkflowCanvas from "./components/WorkflowCanvas";

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <header className="px-4 py-3 border-b bg-white">
        <h1 className="text-lg font-semibold">
          Workflow Builder
        </h1>
      </header>

      {/* Main Canvas */}
      <main className="flex-1">
        <WorkflowCanvas />
      </main>
    </div>
  );
}

export default App;
