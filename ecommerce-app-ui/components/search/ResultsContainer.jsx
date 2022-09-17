import ProductContainer from "./ProductContainer";
import { PRODUCTS } from "../../data/products";

export const ResultsContainer = () => {
    return (
        <div className="flex">
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
                {
                    PRODUCTS.map((product, index) => {
                        return (
                            <ProductContainer key={index} name={product.title} imageUrl={product.imgUrl} />
                        )
                    })
                }
            </div>
        </div>
    )
}