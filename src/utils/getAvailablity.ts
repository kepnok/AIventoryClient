export function getAvailability(quantity: number, restockLevel: number): "in-stock" | "low-stock" | "out-of-stock" {
  if (quantity === 0) return "out-of-stock";
  if (quantity < restockLevel) return "low-stock";
  return "in-stock";
}