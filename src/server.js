
import { Model, Server } from 'miragejs';
import { products } from './backend/db/products';
import { categories } from './backend/db/categories';
import { users } from './backend/db/users';
import { getAllProductsHandler, getSingleProductHandler } from "./backend/Controllers/ProductController";
import { additemtoCartHandler, getAllCategoriesHandler, getCartItemHandler, removeallitemtfromCartHandler, removeitemfromCartHandler, updateitemfromCartHandler } from "./backend/Controllers/CartController";
import { loginHandler, signupHandler } from "./backend/Controllers/AuthController";
import { additemtowishlist, getitemtowishlistHandler, removeitemfromwishlist } from "./backend/Controllers/WishlistController";


export function makeServer(){

  return new Server({
        models : {
            product  : Model,
            category : Model,
            user : Model,
            cart: Model,
            wishlist : Model,
        },

        seeds(server){
            products.forEach((item) => (
                server.create("product" , {...item})
            ));

            categories.forEach((item) => (
                server.create("category" , {...item})
            ));

             users.forEach((item) => (
                server.create("user" , {...item , cart : [] , wishlist : []})
            ));
        },

        routes(){
            this.namespace = "api" ;
            
            this.post('/auth/signup' , signupHandler.bind(this));
            this.post('/auth/login' , loginHandler.bind(this));

            this.get('/products' , getAllProductsHandler.bind(this));
            this.get('/products/:productId' , getSingleProductHandler.bind(this));

            this.get('/categories', getAllCategoriesHandler.bind(this));


            // cart Routes 

            this.get('/user/cart' ,  getCartItemHandler.bind(this));
            this.post('/user/cart' , additemtoCartHandler.bind(this));

            this.post('/user/cart/:productId' , updateitemfromCartHandler.bind(this));
            this.delete('/user/cart/:productId' , removeitemfromCartHandler.bind(this));

            this.delete('/user/cart' , removeallitemtfromCartHandler.bind(this));

            // Wishlist  Routes 

            this.get('/user/wishlist' , getitemtowishlistHandler.bind(this));

            this.post('/user/wishlist' , additemtowishlist.bind(this));
            this.delete('/user/wishlist/:productId' , removeitemfromwishlist.bind(this));
        }
    })
}