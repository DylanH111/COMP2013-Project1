import ItemsContainer from "./Components/ItemsContainer";
import {useState} from "react";
import {products as initialProducts} from "./data/data";

function App() 
{
  const [productList, setProductList] = useState(initialProducts);
  return(
    <div>
      <h1>Thrift Happens</h1>
      <ItemsContainer products={productList} />
    </div>
  );
}
export default App
