import { CategoryCard } from "./CategoryCard"

export const CategoriesSection = () => {
    const categories = [
        {
            name: "Blouses",
            imgUrl: "/images/categories/blouses.webp"
        },
        {
            name: "Coats",
            imgUrl: "/images/categories/coats.webp"
        },
        {
            name: "Dresses",
            imgUrl: "/images/categories/dress.jpeg"
        },
        {
            name: "Skirts",
            imgUrl: "/images/categories/skirts.webp"
        },
        {
            name: "Sweaters",
            imgUrl: "/images/categories/sweaters.webp"
        },
        {
            name: "Vests",
            imgUrl: "/images/categories/vests.jpeg"
        },
    ]
    return (
        <div>
            <h2 className="text-center text-xl mt-6 mb-3 p-2">Browse By Category</h2>
            <div className="grid grid-cols-4">
                {categories.map((category, index) => {
                    return (
                        <CategoryCard key={index} name={category.name} imgUrl={category.imgUrl} />
                    )
                })}
            </div>
        </div>
    )
}