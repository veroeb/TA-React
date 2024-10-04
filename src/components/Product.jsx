import React from "react";
import { useParams } from "react-router-dom";

const productData = {
  1: { name: "Producto 1", description: "Descripción del Producto 1", price: "$10" },
  2: { name: "Producto 2", description: "Descripción del Producto 2", price: "$20" },
  3: { name: "Producto 3", description: "Descripción del Producto 3", price: "$30" },
};

function Product() {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
}

export default Product;
