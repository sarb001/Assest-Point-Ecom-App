import { v4 as uuid } from 'uuid';
import { Response } from 'miragejs';
import { formatDate } from '../../utils/authUtils';

const sign = require('jwt-encode');


export const signupHandler = function (schema,request) {
        const { email , password , ...rest } = JSON.parse(request.requestBody);
        try{
            const foundUser = schema.users.findBy({ email });
            if(foundUser){
                return new Response(422 , {} , {
                    errors : ["  Email Already Exists "],
                });
            }

            const _id = uuid();
            const newUser = {
                _id,
                email,
                password,
                createdAt : formatDate(),
                ...rest,
                updatedAt : formatDate(),
                cart : [],
                wishlist: [],
            };
            const createUser = schema.users.create(newUser);
            console.log('  Created USER --',createUser);
            const encodedToken =  sign({ _id , email } , 'jassa@123');
            return new Response(201, {} , {createUser , encodedToken });

        }catch(error){
            console.log('error inn -',error);
            return new Response(500 , {} ,{error});
        }
}


export const loginHandler =  function (schema,request)  {
     const { email , password } = JSON.parse(request.requestBody);
     try{

         const foundUser = schema.users.findBy({ email });
         console.log(' Logging  email  User --',foundUser);

         if(!foundUser){
             return new Response(404 , {} , {
                errors : [" Email Not Found "]
             })
         }

         if(password === foundUser.password){
             const encodedToken = sign({ _id : foundUser._id , email},
             'jassa@123');
             foundUser.password = undefined;
             return new Response(200, {}, { foundUser , encodedToken });
         }
         new Response(401,{} , {errors: [
            "  UnAuthorized Access Error "]})
     }catch(error){
         return new Response(500, {} , {error});
     }
}