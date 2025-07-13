import { useEffect, useState } from "react";
import axios from "axios";
import { PlusIcon } from "../icons/PlusIcon";
import { Button } from "./Button";

interface BatchPopupProps {
  productId: string;
  onClose: () => void;
}

interface Batch {
  id: number;
  quantity: number;
  expiryDate: string | null;
  restockedAt: string;
  editedBy: string;
}

export function BatchPopup({ productId, onClose }: BatchPopupProps) {
  const [batchInfo, setBatchInfo] = useState<Batch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBatchInfo() {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/${productId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBatchInfo(res.data.data);
      } catch (err) {
        console.error("Failed to fetch batch info", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBatchInfo();
  }, [productId]);

  return (
	<div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center">
      <div className="bg-white rounded-l shadow-lg w-[700px] max-h-[80vh] overflow-hidden py-3">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Batch Information</h2>
		  <div className="flex gap-2">
			<Button size="sm" variant="primary" text="Restock" />
          	<Button size="sm" variant="secondary" onClick={onClose} startIcon={<PlusIcon />} text=""/>
		  </div>
        </div>

        {loading ? (
          <div className="text-center text-sm text-gray-500 p-6">Loading...</div>
        ) : batchInfo.length === 0 ? (
          <div className="text-center text-sm text-gray-500 p-6">No batch data found.</div>
        ) : (
          <div className="overflow-y-auto max-h-[60vh]">
            <div className="grid grid-cols-5 gap-4 px-6 pt-4 pb-2 text-sm text-gray-600 font-medium border-b">
              <div>Batch ID</div>
              <div>Quantity</div>
              <div>Expiry Date</div>
              <div>Restocked At</div>
              <div>Edited By</div>
            </div>

            {batchInfo.map((batch) => (
              <div
                key={batch.id}
                className="grid grid-cols-5 gap-4 px-6 py-3 text-sm border-b"
              >
                <div>{batch.id}</div>
                <div>{batch.quantity} units</div>
                <div>{batch.expiryDate ? new Date(batch.expiryDate).toLocaleDateString() : "N/A"}</div>
                <div>{new Date(batch.restockedAt).toLocaleDateString()}</div>
                <div>{batch.editedBy}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
