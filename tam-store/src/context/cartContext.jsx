import { createContext, useEffect, useState } from "react";

export const CartContext =  createContext({})

import React from 'react'

export const CartContextProvider = ({ children }) => {
    let products = localStorage.getItem(JSON.stringify('product-in-cart'))

    const [productIncart, setProductIncart] = useState(products?products:[])
    useEffect(() => {
        if (products&&!productIncart)
            setProductIncart(products)

    }, [])
    return (
        <CartContext.Provider value={{ productIncart, setProductIncart }}>
            {children}
        </CartContext.Provider>
    )
}

