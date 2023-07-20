import { Children, createContext ,  } from "react";

const CartContext = createContext(null);


const CartProvider = ({chlidren}) => {
    return (
        <CartContext.Provider value = {{state,dispatch}}>
            {children}
        </CartContext.Provider>

    )
}   