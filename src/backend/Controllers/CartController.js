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