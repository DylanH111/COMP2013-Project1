import type {ClothingProduct} from "../data/data";
import ItemCard from "./ItemCard";

interface ItemsContainerProps
{
    products: ClothingProduct[];
    onAddToCheckout: (product: ClothingProduct, quantity: number) => void;
}
function ItemsContainer({products, onAddToCheckout}: ItemsContainerProps)
{
    return(
        <div>
            <h2>Clothing Collection</h2>
            <div>
                {products.map((product) => ( 
                    <ItemCard
                        key={product.id}
                        product={product}
                        onAddToCheckout={onAddToCheckout}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemsContainer;