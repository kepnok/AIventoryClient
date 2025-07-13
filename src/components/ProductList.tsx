import { useEffect, useState } from "react";
import axios from "axios";
import { Items } from "./Items"; 
import { Button } from "./Button";


interface Product {
  name: string;
  sku: string;
  quantity: number;
  restockLevel: number;
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:3000/api/products/withQuantity", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(res.data.data);
        console.log(res.data.data);
      } catch (err: any) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    console.log(products);

    fetchProducts();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Products</h2>
        <div className="flex gap-2">
          <Button
            text="Add Product"
            variant="primary"
            size="sm"
           
            onClick={() => console.log("Add product clicked")}
          />
          <Button
            text="Filters"
            variant="secondary"
            size="sm"
            onClick={() => console.log("Filter clicked")}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 px-4 text-sm text-gray-600 font-medium border-b pb-2">
        <div>Product</div>
        <div>SKU</div>
        <div>Quantity</div>
        <div>Threshold</div>
        <div>Availability</div>
      </div>

      {loading ? (
        <div className="text-gray-500 text-sm px-4 py-4">Loading products...</div>
      ) : error ? (
        <div className="text-red-600 text-sm px-4 py-4">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-gray-500 text-sm px-4 py-4">No products found.</div>
      ) : (
        products.map((product) => (
          <Items
            key={product.sku}
            productName={product.name}
            sku={product.sku}
            quantity={product.quantity}
            restockLevel={product.restockLevel}
          />
        ))
      )}
    </div>
  );
}
