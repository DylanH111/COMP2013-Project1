import {products} from "../data/data";
import ItemCard from "./ItemCard";

function ItemsContainer()
{
    return(
        <div>
            <h2>Clothing Collection</h2>
            <div>
                {products.map((product) => ( 
                    <ItemCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemsContainer;