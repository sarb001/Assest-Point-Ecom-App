
import App from "./App";
import { Model, Server } from 'miragejs';
import { products } from './backend/db/products';
import { categories } from './backend/db/categories';
import { users } from './backend/db/users';
import { getAllProductsHandler } from "./backend/Controllers/ProductController";
import { getAllCategoriesHandler } from "./backend/Controllers/CartController";


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
            this.get('/products' , getAllProductsHandler.bind(this));

            this.get('/categories', getAllCategoriesHandler.bind(this));

            // this.get('/user' , );
        }
    })
}