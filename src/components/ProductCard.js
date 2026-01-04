import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function ProductCard({ product }) {
  const footer = (
    <Button
      label="Comprar"
      icon="pi pi-shopping-cart"
      className="p-button-sm p-button-outlined"
    />
  );

  return (
    <Card
      title={product.title}
      subTitle={`R$ ${product.price}`}
      footer={footer}
      className="h-full"
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <p className="mt-3 text-sm text-overflow-ellipsis white-space-nowrap overflow-hidden">
        {product.description}
      </p>
    </Card>
  );
}
