import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../Reducers/ProductReducer";

const ProductContext = createContext(null);

const initialState = {
    price : 1000,
    rating : "",
    sortBy : "",
    category : {  selfHelp : false , stockInvesting : false , realEstate : false }
}

const ProductProvider = ({children}) => {
    const [state,dispatch] = useReducer(ProductReducer,initialState);
    
    return(
        <ProductContext.Provider value = {{state,dispatch}} >
                {children}
        </ProductContext.Provider>
    )
}

 const useProduct = () =>  useContext(ProductContext);

export { ProductProvider , useProduct }