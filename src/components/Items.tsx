interface ItemProps {
  productName: string;
  sku: string;
  quantity: number;
  restockLevel: number;
}

function getAvailability(quantity: number, restockLevel: number): string {
  if (quantity === 0) return "out-of-stock";
  if (quantity < restockLevel) return "low-stock";
  return "in-stock";
}

export function Items(props: ItemProps) {
  const availability = getAvailability(props.quantity, props.restockLevel);

  return (
    <div className="grid grid-cols-5 gap-4 py-2 px-4 border-b text-sm items-center">
      <div>{props.productName}</div>
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
