import React, {createContext, useState} from 'react';

export const CartContext = createContext({})

interface cartData{
    id: string,
    amount: number
}

function CartProvider({children}) {
    const [cart, setCart] = useState<cartData[]>([])
    return( 
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    
    )
}

export default CartProvider;