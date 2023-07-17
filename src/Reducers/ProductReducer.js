
export const ProductReducer = (state,action) => {
    switch(action.type){
        case "CLEAR" : 
         return {
            price : 1000,
            sortBy : "",
            rating : "",
            category : {  selfHelp : false , stockInvesting : false , realEstate : false },
         }
         case "SELF_HELP" : 
         return {
            ...state,
            category : {...state.category , selfHelp : !state.category.selfHelp }
         }
         case "STOCK_INVESTING" : 
         return {
            ...state,
            category : {...state.category , stockInvesting  : !state.category.stockInvesting }
         }
         case "REAL_ESTATE" : 
         return {
            ...state,
            category : {...state.category , realEstate : !state.category.realEstate }
         }
    }
}