import { children, createContext, useContext, useReducer ,  } from "react";
import { CartReducer } from "../Reducers/CartReducer";

const CartContext = createContext();

const initialState = {
    wishlist : [],
    cart : [],
    order : [],
    totalItems : 0,
    totalPrice : 0,
    amountPaid : 0
}

const CartProvider = ({children}) => {
    const [cartState,cartDispatch] = useReducer(CartReducer ,initialState);

    return (
        <CartContext.Provider value = {{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}   

const useCart = () => useContext(CartContext);

export { CartProvider ,useCart }