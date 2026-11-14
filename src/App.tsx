import ItemsContainer from "./Components/ItemsContainer";
import {useState} from "react";
import {products as initialProducts} from "./data/data";
import type {ClothingProduct} from "./data/data";
import CheckoutContainer, {type CheckoutItem} from "./Components/CheckoutContainer";

function App() 
{
  const [productList, setProductList] = useState(initialProducts);
  
  const [checkout, setCheckout] = useState<CheckoutItem[]>([]);

  function addToCheckout(product: ClothingProduct, quantity: number) {
    if (quantity <= 0 || quantity > product.quantity) {
        return;
    }

    const existingItem = checkout.find(
        (item) => item.product.id === product.id
    );

    if (existingItem) {
        const updatedCheckout = checkout.map((item) => {
            if (item.product.id === product.id) {
                return {
                    ...item,
                    quantity: item.quantity + quantity
                };
            }

            return item;
        });

        setCheckout(updatedCheckout);
    } else {
        setCheckout([
            ...checkout,
            { product: product, quantity: quantity }
        ]);
    }

    const updatedProducts = productList.map((item) => {
        if (item.id === product.id) {
            return {
                ...item,
                quantity: item.quantity - quantity
            };
        }

        return item;
    });

    setProductList(updatedProducts);
}

function removeFromCheckout(productId: number) {
  const itemToRemove = checkout.find(
    (item) => item.product.id === productId
  );

  if(!itemToRemove)
  {
    return;
  }

  const updatedProducts = productList.map((product) => {
    if(product.id === productId) 
    {
      return {
        ...product,
        quantity: product.quantity + itemToRemove.quantity
      };
    }
    return product;
  });
  setProductList(updatedProducts);

  const updatedCheckout = checkout.filter(
    (item) => item.product.id !== productId
  );
  setCheckout(updatedCheckout);
}

function emptyCheckout() {
  const updatedProducts = productList.map((product) =>{
    const checkoutItem = checkout.find(
      (item) => item.product.id === product.id
    );
    if(checkoutItem)
    {
      return {
        ...product,
        quantity: product.quantity + checkoutItem.quantity
      };
    }

    return product;
  });
  setProductList(updatedProducts);
  setCheckout([]);
}

  return(
    <div>
      <h1>Thrift Happens</h1>
      <ItemsContainer 
      products={productList}
      onAddToCheckout={addToCheckout}
      />
      <CheckoutContainer checkout={checkout} onRemove={removeFromCheckout} onEmptyCheckout={emptyCheckout}/>
    </div>
  );
  }
export default App
