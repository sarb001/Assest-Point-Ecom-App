
export const CartReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_CART": 
        return {
            ...state,
            cart :  action.payload.cart,
            totalItems : state.totalItems + 1,
            totalPrice : state.totalPrice + action.payload.price,
        }
        case "REMOVE_FROM_CART" : 
        return {
            ...state,
            cart : action.payload.cart,
            totalItems : state.totalItems - action.payload.quantity,
            totalPrice :  state.totalPrice - action.payload.price * action.payload.quantity,  
        }
        case "ADD_TO_WISHLIST" : 
        return {
             ...state ,
             wishlist : action.payload ,
        }
        case "REMOVE_FROM_WISHLIST" : 
        return {
             ...state ,
             wishlist : action.payload ,
        }
        case "INCREMENT_PRODUCT":
            return {
                ...state,
                cart : action.payload.cart,
                totalItems : state.totalItems + 1,
                totalPrice : state.totalPrice + action.payload.price,
            }
            
        case "DECREMENT_PRODUCT" : 
        return {
            ...state,
            cart : action.payload.cart,
            totalItems : state.totalItems - 1,
            totalPrice : state.totalPrice - action.payload.price,
        }

        case "ADD_AMOUNT_TO_PAY" : 
        return {
            ...state,
            amountPaid : action.payload,
        }

        case "CLEAR_CART":
            return {
                ...state,
                cart : [],
            }
        default : 
           return state;
    }
}