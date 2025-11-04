import { createContext, useEffect, useState } from "react";

export const CartContext =  createContext({})

import React from 'react'

export const CartContextProvider = ({ children }) => {
    const [productIncart, setProductIncart] = useState('')
    useEffect(() => {
        let products = localStorage.getItem(JSON.stringify('product-in-cart'))
        if (products)
            setProductIncart(products)

    }, [])
    return (
        <CartContext.Provider value={{ productIncart, setProductIncart }}>
            {children}
        </CartContext.Provider>
    )
}

