import Image from "next/image";

const imageLoader = ({ src }) => {
    return `/images/products/${src}`
}

const ProductContainer = ({ name, imageUrl }) => {
    return (
        <div className="w-full text-center rounded">
            <div className="border rounded border-slate-300">
                <Image loader={imageLoader} src={`${imageUrl}`} alt="product image" width={120} height={300} />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default ProductContainer;