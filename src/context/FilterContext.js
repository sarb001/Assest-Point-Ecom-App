import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { CartReducer } from "../Reducers/CartReducer";
import axios from "axios";

const FilterContext = createContext();

const FilterProvider = ({children}) => {

    const [productListing,setproductListing] = useState([]);
    const [filterState,filterDispatch] = useReducer(CartReducer , {
        order : [],
        totalItems : 0,
        totalPrice : 0,
        amountPaid : 0,
    })

     useEffect(() => {
        (async () => {
            try{
                const response = await axios.get('/api/products');
                setproductListing(response.data.products);
            }catch{
                console.log('Error here ');
            }
        })();
     },[])

    return (
        <FilterContext.Provider value = {{ filterState, filterDispatch , productListing }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);