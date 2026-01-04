import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="min-h-screen surface-ground">
      <div className="surface-card p-4 shadow-2 border-round">
        <h1 className="text-center mb-5">Loja Virtual</h1>
        <ProductList />
      </div>
    </div>
  );
}
