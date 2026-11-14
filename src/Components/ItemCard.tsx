import type {ClothingProduct} from "../data/data";
import {useState} from "react";

interface ItemCardProps 
{
    product: ClothingProduct;
}

function ItemCard({product}: ItemCardProps)
{
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    function increaseQuantity()
    {
        if(selectedQuantity < product.quantity) 
            {
                setSelectedQuantity(selectedQuantity + 1);
            }
    }

    function decreaseQuantity() 
    {
        if(selectedQuantity > 0)
        {
            setSelectedQuantity(selectedQuantity - 1);
        }
    }
    return (
        <div>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Fit: {product.fit}</p>
            <p>Category: {product.category}</p>
            <p>Colour: {product.color}</p>
            <p>Size: {product.size}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Avalible: {product.quantity}</p>

            <p>Selected Quantity: {selectedQuantity}</p>
            <button onClick={decreaseQuantity}>-</button>
            <button onClick={increaseQuantity}>+</button>
        </div>
    );
}

export default ItemCard;