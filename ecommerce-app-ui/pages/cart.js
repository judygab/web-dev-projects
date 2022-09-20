import { useCart } from '../context/cart-context';
import ProductContainer from '../components/cart/ProductContainer';
import { Button } from '../components/elements/Button';

const Cart = () => {
    const { state } = useCart();

    if (!state.products || state.products.length == 0) {
        return (
            <div className='flex justify-center'>
                <p>Your cart is empty!</p>
            </div>
        )
    }
    return (
        <div>
            {
                state.products.map((product, index) => {
                    return (
                        <ProductContainer key={index} product={product} />
                    )
                })
            }
            <div className='flex md:max-w-screen-lg mx-auto justify-end'>
                <Button variant='dark'>Checkout</Button>
            </div>
        </div>
    )
}

export default Cart;