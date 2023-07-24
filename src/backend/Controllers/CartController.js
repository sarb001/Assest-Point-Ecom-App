import { Response } from "miragejs";
import { AuthorizingRoute, formatDate } from "../../utils/authUtils";


export const getAllCategoriesHandler =     function () {
    try{
        return new Response(200, {} , { categories : this.db.categories });
    }catch(error){
            return new Response(
                500 ,{} , {error}
            );
    }
};

// getting items to user's  cart 

export const getCartItemHandler = function (schema,request) {
        const  userId = AuthorizingRoute.call(this, request);
        if(!userId){
            new Response(
                404,{},
                {
                  errors: ["The email you entered is not Registered. Not Found error"],
                }
              );
            }
            const userCart = schema.users.findBy({_id: userId}).cart;
            return new Response(200, {}, {cart: userCart});
};

// add  items to user's cart 

export const additemtoCartHandler = function (schema,request) {
    const  userId = AuthorizingRoute.call(this, request);
    try{
    if(!userId){
        new Response(
            404,
            {},
            {
              errors: ["The email you entered is not Registered. Not Found error"],
            }
          );
        }

        const userCart = schema.users.findBy({_id : userId }).cart;
        const { product } = JSON.parse(request.requestBody);
        userCart.push({
            ...product,
            createdAt : formatDate(),
            updatedAt : formatDate(),
            qty : 1,
        })
        this.db.users.update({_id : userId} ,{cart : userCart});
        return new Response(201,{},{cart : userCart});
        
    }catch(error){
        return new Response(500 , {} , {
            error,
        });
    }
}

// remove Items from User's cart 

export const removeitemfromCartHandler =    function(schema,request) {
    const  userId = AuthorizingRoute.call(this, request);
    try{
    if(!userId){
        new Response(
            404,
            {},
            {
              errors: ["The email you entered is not Registered. Not Found error"],
            }
          );
        }
     
        let userCart = schema.users.findBy({ _id : userId }).cart;
        const productId = request.params.productId;
        userCart = userCart.filter((item) => item._id !== productId);
        this.db.users.update({ _id : userId } , {cart: userCart});  
        return new Response(200,{},{cart : userCart});
    }catch(error){
        return new Response(500 , {} , {
            error,
        });
    }
}
        
// remove All items 

export const removeallitemtfromCartHandler = function(schema,request)  {
    const  userId = AuthorizingRoute.call(this, request);

    try{
      if(!userId){
        new Response(
            404,
            {},
            {
              errors: ["The email you entered is not Registered. Not Found error"],
            }
          );
        }  
        let userCart = schema.users.findBy({ _id : userId }).cart;
        userCart  = [];
        this.db.users.update({ _id: userCart },{cart : userCart});
        return new Response(200 , {} , {cart : userCart});

    }catch(error){
        return new Response(
            500 , {} , {
                error,
            }
        )
    }
}


export const updateitemfromCartHandler = function(schema,request){

}