import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PRODUCTS } from '../../data/products';
import Spinner from '../../components/elements/Spinner';
import Image from "next/image";
import NumberCounter from '../../components/product/NumberCounter';
import { useCart } from '../../context/cart-context';

const imageLoader = ({ src }) => {
    return `/images/products/${src}`
}

const ProductPage = () => {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const { dispatch } = useCart();

    useEffect(() => {
        if (productId) {
            let index = PRODUCTS.findIndex(product => product.id == productId);
            if (index > -1) {
                setProduct(PRODUCTS[index])
            } else {
                setNotFound(true)
            }
            setLoading(false)
        }
    }, [productId])

    const updateQuantity = (newQuantity) => {
        setQuantity(newQuantity);
    }

    if (notFound) {
        return (
            <div>Product not found</div>
        )
    }

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto my-6'>
            {
                product && 
                <>
                    <div className='cols-span-2'>
                        <div className="border rounded border-slate-300 flex items-center justify-center">
                            <Image loader={imageLoader} src={`${product.imgUrl}`} alt="product image" width={150} height={300} objectFit="cover" />
                        </div>
                    </div>
                    <div className='cols-span-3 flex flex-col justify-between'>
                        <div className='product-info'>
                            <h1>{product.title}</h1>
                            <p className='font-graphikLight'>{product.description}</p>
                        </div>
                        <div className='product-controls flex flex-row items-end'>
                            <NumberCounter quantity={quantity} updateQuantity={updateQuantity} />
                            <button onClick={() => dispatch({ type: 'add', product: { ...product, qt: quantity }})} className='bg-black text-white p-3 w-full mx-3'>Add To Cart</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProductPage;