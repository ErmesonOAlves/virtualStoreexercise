import { useEffect, useState } from "react";
import { api } from "../services/api";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  function addProduct(product) {
    setProducts((prev) => [product, ...prev]);
  }

  return (
    <div className="p-4">
      <h2 className="mb-4">Adicionar novo produto</h2>

      <ProductForm onAdd={addProduct} />

      <div className="grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 sm:col-6 md:col-4 lg:col-3"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
