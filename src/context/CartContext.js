import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({children}) => {

     const [cartItems,setcartItems] = useState([]);
     const { token }  = useAuth();

    useEffect(() => {
        if(token){
            (async () => {
                try{
                     const response = await axios.get('/api/user/cart' , {
                        headers : {  authorization : token },
                     });
                     if(response.status === 200){
                         setcartItems(response.data.cart);
                     }
                }catch(error){
                    console.log('error ');
                }
            })();
        }else{
             setcartItems([]);
        }  
    },[token])

    return (
        <CartContext.Provider value = {{cartItems,setcartItems}}>
            {children}
        </CartContext.Provider>
    )
}   
    
const useCart = () => useContext(CartContext);

export { CartProvider ,useCart };