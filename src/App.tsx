import { Button } from "./components/Button"
import { InventoryStatus } from "./components/InventoryStatus"
import { ProductList } from "./components/ProductList"
import { PlusIcon } from "./icons/PlusIcon"

function App() {
  

  return (
    <>
      <Button size="lg" variant="primary" text="test button" startIcon={<PlusIcon size="lg" />}/>
      <Button size="lg" variant="secondary" text="test button" startIcon={<PlusIcon size="lg" />}/>

      <div>
        <InventoryStatus />
        <ProductList />
      </div>

    </>
  )
}

export default App
