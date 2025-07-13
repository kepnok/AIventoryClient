import { useEffect, useState } from "react";
import axios from "axios";
import { getAvailability } from "../utils/getAvailablity"; // adjust path if needed

interface Product {
  name: string;
  sku: string;
  quantity: number;
  restockLevel: number;
}

export function InventoryStatus() {
  const [counts, setCounts] = useState({
    total: 0,
    inStock: 0,
    lowStock: 0,
    outOfStock: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/api/products/withQuantity", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data: Product[] = res.data.data;

        const stockCount = {
          inStock: 0,
          lowStock: 0,
          outOfStock: 0,
        };

        data.forEach((product) => {
          const tag = getAvailability(product.quantity, product.restockLevel);
          if (tag === "in-stock") stockCount.inStock++;
          else if (tag === "low-stock") stockCount.lowStock++;
          else stockCount.outOfStock++;
        });

        setCounts({
          total: data.length,
          ...stockCount,
        });
      } catch (err) {
        console.error("Error fetching inventory status", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Overall Inventory</h2>
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <div className="text-center px-4">
          <div className="text-blue-600 font-medium">Total Products</div>
          <div className="text-xl font-semibold">{counts.total}</div>
          <div className="text-sm text-gray-400">Tracked</div>
        </div>
        <div className="text-center px-4">
          <div className="text-green-600 font-medium">In-stock</div>
          <div className="text-xl font-semibold">{counts.inStock}</div>
          <div className="text-sm text-gray-400">Healthy</div>
        </div>
        <div className="text-center px-4">
          <div className="text-yellow-600 font-medium">Low-stock</div>
          <div className="text-xl font-semibold">{counts.lowStock}</div>
          <div className="text-sm text-gray-400">Needs restock</div>
        </div>
        <div className="text-center px-4">
          <div className="text-red-600 font-medium">Out-of-stock</div>
          <div className="text-xl font-semibold">{counts.outOfStock}</div>
          <div className="text-sm text-gray-400">Unavailable</div>
        </div>
      </div>
    </div>
  );
}
