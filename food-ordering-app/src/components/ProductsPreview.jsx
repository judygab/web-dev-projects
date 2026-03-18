import React, { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";


export const ProductsPreview = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }
    
    return (
        <div className="container mx-auto pb-12 w-full md:w-3/4 text-white">
            <div className="flex flex-col items-center justify-center mb-10 space-y-3">
                <h2 className="text-4xl font-extrabold text-white tracking-wide">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato to-marigold">Items</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-marigold to-tomato rounded-full"></div>
            </div>
            <Carousel responsive={responsive} itemClass="px-3" className="z-20">
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <div key={index} className="w-full h-full py-6">
                            <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
                        </div>
                    )
                })
            }
            </Carousel>
        </div>
    )
}