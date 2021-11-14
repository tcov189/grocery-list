import Button from "./global/Button";

function App() {
  return (
    <div className="container min-h-screen bg-gray-300">
      <header className="w-full bg-gray-500 text-gray-50 py-3 px-2">
        Grocery List App
      </header>

      <main className="my-2 px-2">
        <Button type="success">Click</Button>
      </main>
    </div>
  );
}

export default App;
