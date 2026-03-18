import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-full h-full p-6 mx-2 flex flex-col items-center justify-between rounded-3xl text-white bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(255,190,11,0.15)] hover:-translate-y-2 transition-all duration-300 group text-center cursor-pointer">
            <div className="w-48 h-48 mb-6 relative">
                <div className="absolute inset-0 bg-marigold/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition duration-500 relative z-10" />
            </div>
            <h2 className="pb-3 text-2xl font-bold tracking-wide group-hover:text-marigold transition duration-300">{product.name}</h2>
            <p className="mb-6 h-16 text-sm text-gray-400 font-light leading-relaxed line-clamp-3">{product.desciption}</p>
            <div className="w-full mt-auto">
                <AddProduct onAddProduct={addProduct} />
            </div>
        </div>
    )
}