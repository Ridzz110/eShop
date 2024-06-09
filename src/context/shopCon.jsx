import React, { createContext, useState } from 'react';
import all_product from '../home/assests/mockData.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());
    const [selectedSizes, setSelectedSizes] = useState({});

    console.log("shop context selectSizes: ", selectedSizes);

    const addToCart = (id, size) => {
        setCartItem(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    
        setSelectedSizes(prev => ({
            ...prev,
            [id]: size
        }));
    };

    const removeFromCart = (id) => {
        setCartItem(prev => {
            const newCart = { ...prev };
            if (newCart[id] > 1) {
                newCart[id]--;
            } else {
                delete newCart[id];
            }
            return newCart;
        });
        setSelectedSizes(prev => {
            const newSizes = { ...prev };
            delete newSizes[id];
            return newSizes;
        });
    };

    const getTotalQuantity = () => {
        return Object.values(cartItem).reduce((acc, curr) => acc + curr, 0);
    };

    const getTotalPrice = () => {
        return Object.entries(cartItem).reduce((acc, [id, quantity]) => {
            const product = all_product.find(item => item.id === Number(id));
            if (product) {
                const price = product.price;
                return acc + (price * quantity);
            }
            return acc;
        }, 0);
    };

    const contextValue = { 
        all_product, 
        cartItem, 
        addToCart, 
        removeFromCart, 
        selectedSizes,
        getTotalQuantity,
        getTotalPrice
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
