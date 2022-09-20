import React from "react";

const CartContext = React.createContext();

function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            {
                return { products: [...state.products, action.product]}
            }
        case 'remove':
            {
                return { products: state.products.filter((product) => product.id !== action.id)}
            }
        case 'updateAmount':
            {
                let index = state.products.findIndex((product) => product.id === action.id);
                let product = state.products[index];
                let updatedProduct = { ...product, qt: action.quantity};
                return { products: [...state.products.slice(0, index), ...state.products.slice(index + 1), updatedProduct]};
            }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function CartProvider({children}) {
    const [state, dispatch] = React.useReducer(cartReducer, { products: []})
    const value = {state, dispatch}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
    const context = React.useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export {useCart, CartProvider}