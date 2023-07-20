import { Response } from "miragejs";


export const getAllCategoriesHandler =     function () {
    try{
        return new Response(200, {} , { categories : this.db.categories });
    }catch(error){
            return new Response(
                500 ,{} , {error}
            );
    }
};


export const getCartItemHandler = function (schema,request) {
        // const  userId = requiresAuth.call(this, request);
}

export const additemtoCartHandler = () => {

}

export const updateitemfromCartHandler = () => {

}

export const removeitemfromCartHandler = () => {}
export const removeallitemtfromCartHandler = () => {}