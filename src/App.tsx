import { Button } from "./components/Button"
import { InventoryStatus } from "./components/InventoryStatus"
import { ProductList } from "./components/ProductList"
import { Sidebar } from "./components/Sidebar"
import { PlusIcon } from "./icons/PlusIcon"

function App() {
  

  return (
    <>
      <div className="flex">
         <div>
          <Sidebar />
        </div>

        <div>
          <Button size="lg" variant="primary" text="test button" startIcon={<PlusIcon size="lg" />}/>
          <Button size="lg" variant="secondary" text="test button" startIcon={<PlusIcon size="lg" />}/>
          <div>
            <InventoryStatus />
            <ProductList />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
