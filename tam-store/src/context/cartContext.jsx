import { createContext, useEffect, useState } from "react";

export const CartContext =  createContext({})

import React from 'react'

export const CartContextProvider = ({ children }) => {
    let products = localStorage.getItem("product-in-cart")
    // console.log(JSON.parse(products))
    const [productIncart, setProductIncart] = useState(products?JSON.parse(`${products}`):[])
    // console.log(productIncart)
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

