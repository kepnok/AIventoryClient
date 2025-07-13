import { Button } from "./components/Button"
import { ProductList } from "./components/ProductList"
import { PlusIcon } from "./icons/PlusIcon"

function App() {
  

  return (
    <>
      <Button size="lg" variant="primary" text="test button" startIcon={<PlusIcon size="lg" />}/>
      <Button size="lg" variant="secondary" text="test button" startIcon={<PlusIcon size="lg" />}/>

      <div>
        <ProductList />
      </div>

    </>
  )
}

export default App
