import type {ClothingProduct} from "../data/data";
import CheckoutCard from "./CheckoutCard";

export interface CheckoutItem 
{
    product: ClothingProduct;
    quantity: number;

}

interface CheckoutContainerProps {
    checkout: CheckoutItem[];
    onRemove: (productId: number) => void;
    onEmptyCheckout: () => void;
}

function CheckoutContainer({checkout, onRemove, onEmptyCheckout}: CheckoutContainerProps) {
    const finalTotal = checkout.reduce(
        (total,item) => total + (item.product.price * item.quantity),0
    );
    return (
        <div>
            <h2>Your Checkout</h2>

            {checkout.length === 0 ? (
                <p>Cart Empty</p>
            ) : (
                <div>
                    {checkout.map((item) => (
                        <CheckoutCard 
                        key={item.product.id}
                        product={item.product}
                        quantity={item.quantity}
                        onRemove={onRemove}
                    />
                    ))}
                    <h3>Final Total: ${finalTotal.toFixed(2)}</h3>
                    <button onClick={onEmptyCheckout}>Clear Checkout</button>
                    </div>
            )}
        </div>
    )
}

export default CheckoutContainer;