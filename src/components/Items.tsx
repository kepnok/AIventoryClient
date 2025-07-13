import { getAvailability } from "../utils/getAvailablity";

interface ItemProps {
  productName: string;
  sku: string;
  quantity: number;
  restockLevel: number;
}

export function Items(props: ItemProps) {
  const availability = getAvailability(props.quantity, props.restockLevel);

  return (
    <div className="grid grid-cols-5 gap-4 py-2 px-4 border-b text-sm 	">
      <div >{props.productName}</div>
      <div>{props.sku}</div>
      <div>{props.quantity} units</div>
      <div>{props.restockLevel} units</div>
      <div
        className={
          availability === "in-stock"
            ? "text-green-600"
            : availability === "low-stock"
            ? "text-yellow-600"
            : "text-red-600"
        }
      >
        {availability.replace("-", " ")}
      </div>
    </div>
  );
}
