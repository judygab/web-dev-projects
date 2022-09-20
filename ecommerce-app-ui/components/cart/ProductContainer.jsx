import Image from "next/image";
import NumberCounter from '../../components/product/NumberCounter';
import { useCart } from '../../context/cart-context';

const imageLoader = ({ src }) => {
    return `/images/products/${src}`
}

const ProductContainer = ({ product }) => {
    const { dispatch } = useCart();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto my-6 border rounded border-slate-300 p-3'>
        {
            product && 
            <>
                <div className='cols-span-2'>
                    <div className="flex items-center justify-center">
                        <Image loader={imageLoader} src={`${product.imgUrl}`} alt="product image" width={150} height={300} objectFit="cover" />
                    </div>
                </div>
                <div className='cols-span-3 flex flex-col justify-between'>
                    <div className='product-info'>
                        <h1>{product.title}</h1>
                        <p className='font-graphikLight'>{product.description}</p>
                    </div>
                    <div className='product-controls flex flex-row items-end'>
                        <NumberCounter quantity={product.qt} updateQuantity={(quantity) => dispatch({ type: 'updateAmount', id: product.id, quantity: quantity})} />
                    </div>
                </div>
            </>
        }
    </div>
    )
}

export default ProductContainer;