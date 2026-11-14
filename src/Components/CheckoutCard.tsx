import type {ClothingProduct} from "../data/data";

interface  CheckoutCardProps {
    product: ClothingProduct;
    quantity: number;
    onRemove: (productId: number) => void;
}

function CheckoutCard({product, quantity, onRemove}: CheckoutCardProps) {
    return (
        <div>
            <img src={product.image} alt={product.name} width= "100"/>
            <h3>{product.name}</h3>
            <p>Unit Price: ${product.price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => onRemove(product.id)}>Remove Item</button>
        </div>
    );
}

export default CheckoutCard;