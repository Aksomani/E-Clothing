import { createContext, useState, useEffect } from "react";


//logic for adding item to cart
const addCartItem = (cartItems, productToAdd) => {
    // Check if the productToAdd already exists in cartItems
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    // If found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // If not found, add a new item with a quantity of 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

//logic for removing cart item
const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove 
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    //check if quantity is =1, if yes then remove
    if(existingCartItem && existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    //return back cartItem with matching cart item with reduced quantity
   return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
    
}

export const CartContext = createContext({ 
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart : () => {},
    cartCount: 0,
    cartTotal: 0
})


export const CartProvider  = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount , setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount  = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal  = cartItems.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])
    

    const addItemToCart = (cartItemToRemove) => {
        setCartItems(addCartItem(cartItems, cartItemToRemove))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value =  {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}