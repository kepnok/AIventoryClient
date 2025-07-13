import { Sidebar } from "../components/Sidebar";
import { InventoryStatus } from "../components/InventoryStatus";
import { ProductList } from "../components/ProductList";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-hidden">
        <InventoryStatus />
        <div className="mt-4 h-[calc(100vh-200px)] overflow-y-auto pr-2">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
