import { Button } from "./components/Button"
import { Items } from "./components/Items"
import { PlusIcon } from "./icons/PlusIcon"

function App() {
  

  return (
    <>
      <Button size="lg" variant="primary" text="test button" startIcon={<PlusIcon size="lg" />}/>
      <Button size="lg" variant="secondary" text="test button" startIcon={<PlusIcon size="lg" />}/>

      <Items productName="Milk" sku="MILK-500ML" quantity={43} restockLevel={10} />
      <Items productName="water" sku="WATER-1L" quantity={23} restockLevel={30} />

    </>
  )
}

export default App
