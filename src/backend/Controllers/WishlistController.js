import { Response } from "miragejs";
import { AuthorizingRoute, formatDate } from "../../utils/authUtils";


export const getitemtowishlistHandler = function(schema,request){
    const  userId = AuthorizingRoute.call(this, request);
    if(!userId){
        new Response(
            404,
            {},
            {
            errors: ["The email you entered is not Registered. Not Found error"],
            }
        );
    }
    const userwishlist = schema.users.findBy({ _id : userId}).wishlist;
    return new Response(200, {} , {wishlist : userwishlist});
}


export const additemtowishlist = function(schema,request){
    try{
        const  userId = AuthorizingRoute.call(this, request);
        if(!userId){
            new Response(
                404,
                {},
                {
                errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }

        const userwishlist = schema.users.findBy({ _id : userId}).wishlist;
        const {product} = JSON.parse(request.requestBody);
        userwishlist.push({
            ...product,
            createdAt : formatDate(),
            updatedAt : formatDate(),
        });
        this.db.users.update({ _id : userId } , {  wishlist : userwishlist })
        return new Response(200, {} , {wishlist : userwishlist});
    }catch(error){
        return new Response(500 , {} , {
            error,
        })  
    }
}


export const removeitemfromwishlist = function(schema,request){
    try{
         const  userId = AuthorizingRoute.call(this, request);
                if(!userId){
                    new Response(
                        404,
                        {},
                        {
                        errors: ["The email you entered is not Registered. Not Found error"],
                        }
                    );
                }
        let userwishlist = schema.users.findBy({ _id : userId}).wishlist;
        const productId = request.params.productId;
        userwishlist = userwishlist.filter((item) => item._id !==  productId);
        this.db.users.update({ _id : userId } , { wishlist : userwishlist });
        return new Response(200 , {} , { wishlist : userwishlist });
        
    }catch(error){
        return new Response(500 , {} , {
            error,
        })
    };
}

