import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function ProductForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !price) return;

    onAdd({
      id: Date.now(),
      title,
      price,
      description: "Produto adicionado manualmente",
      image: "https://via.placeholder.com/200"
    });

    setTitle("");
    setPrice(null);
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid mb-5">
      <div className="field">
        <label>Nome do produto</label>
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Preço</label>
        <InputNumber
          value={price}
          onValueChange={(e) => setPrice(e.value)}
          mode="currency"
          currency="BRL"
          locale="pt-BR"
        />
      </div>

      <Button
        label="Adicionar produto"
        icon="pi pi-plus"
        type="submit"
      />
    </form>
  );
}
