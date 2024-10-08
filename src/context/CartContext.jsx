

import React, { createContext, useState, useEffect } from 'react';
import { burguers } from "../utils/burguers.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [burguersList, setBurguersList] = useState(burguers);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        const burguerIndex = cart.findIndex((cartItem) => cartItem.nome === item.nome);

        if (burguerIndex >= 0) {
            const updatedCart = cart.map((cartItem, index) => {
                if (index === burguerIndex) {
                    return {
                        ...cartItem,
                        quantidade: cartItem.quantidade + item.quantidade,
                        valorTotal: cartItem.valorTotal + item.valorTotal,
                    };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart((prevCart) => [...prevCart, item]);
        }
    };

    const updateQuantity = (itemName, newQuantity) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.nome === itemName) {
                const updatedQuantity = Math.max(0, newQuantity); 
                return {
                    ...cartItem,
                    quantidade: updatedQuantity,
                    valorTotal: cartItem.preco * updatedQuantity,
                };
            }
            return cartItem;
        }).filter(cartItem => cartItem.quantidade > 0); 

        setCart(updatedCart);
    };

    const valorTotal = cart.reduce((acc, item) => acc + item.valorTotal, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, valorTotal, updateQuantity, burguersList, setBurguersList }}>
            {children}
        </CartContext.Provider>
    );
};
