import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash } from "@phosphor-icons/react";
import EditaProduto from "../EditaProduto";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Tabela = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const listProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/product");
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/product/${id}`);
      listProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <tbody className="divide-y divide-gray-200">
      {products.map((product) => (
        <tr key={product.id}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {product.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {product.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {product.quantity}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            R$ {product.price}
          </td>
          <td className="whitespace-nowrap px-4 py-2 mt-1">
            <EditaProduto productId={product.id} />
          </td>
          <td className="whitespace-nowrap px-4 py-2">
            <button
              type="button"
              className="inline-block rounded bg-red-600 p-2 text-xs font-medium text-white hover:bg-red-700"
              onClick={() => handleDelete(product.id)}
            >
              <Trash size={24} color="#fff" weight="bold" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tabela;
