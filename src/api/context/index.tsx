import React, { createContext, useState, useContext } from 'react';

// Defina a interface para os itens do carrinho
interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

// Defina a interface para o contexto do carrinho
interface CartContextData {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
}

// Crie o contexto do carrinho
const CartContext = createContext<CartContextData>({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { }
});

// Crie o provedor do contexto do carrinho
export const CartProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Função para adicionar um item ao carrinho
    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            // Verifique se o item já existe no carrinho
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                // Se o item já existe, atualize apenas a quantidade
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // Se o item ainda não existe, adicione-o ao carrinho
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Função para remover um item do carrinho
    const removeFromCart = (itemId: number) => {
        setCartItems((prevItems) => {
            // Verifique se o item existe no carrinho
            const existingItem = prevItems.find((i) => i.id === itemId);
            if (existingItem) {
                // Se a quantidade do item for maior que 1, diminua a quantidade em 1
                if (existingItem.quantity > 1) {
                    return prevItems.map((i) =>
                        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                    );
                } else {
                    // Se a quantidade do item for igual a 1, remova o item do carrinho
                    return prevItems.filter((item) => item.id !== itemId);
                }
            } else {
                // Se o item não existir no carrinho, retorne os itens anteriores
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

// Crie um hook para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);
