import React, { createContext, useState, useContext } from 'react';

// Define the interface for cart items
interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

// Set the interface to the cart context
interface CartContextData {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
}

// Create cart context
const CartContext = createContext<CartContextData>({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { }
});

// Create cart context provider
export const CartProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Function to add an item to the cart
    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            // Check if the item already exists in the cart
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                // If the item already exists, just update the quantity
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // If the item does not yet exist, add it to the cart
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId: number) => {
        setCartItems((prevItems) => {
            // Check if the item exists in the cart
            const existingItem = prevItems.find((i) => i.id === itemId);
            if (existingItem) {
                // If the item's quantity is greater than 1, decrease the quantity by 1
                if (existingItem.quantity > 1) {
                    return prevItems.map((i) =>
                        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                    );
                } else {
                    // If item quantity equals 1, remove item from cart
                    return prevItems.filter((item) => item.id !== itemId);
                }
            } else {
                // If the item does not exist in the cart, return the previous items
                return prevItems;
            }
        });
    };



    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a hook to use cart context
export const useCart = () => useContext(CartContext);
