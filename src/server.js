
import App from "./App";
import { Model, Server } from 'miragejs';
import { products } from './backend/db/products';
import { categories } from './backend/db/categories';


export function makeServer(){

  return new Server({
        models : {
            product  : Model,
            category : Model,
        },

        seeds(server){
            products.forEach((item) => (
                server.create("product" , {...item})
            ));

            categories.forEach((item) => (
                server.create("category" , {...item})
            ));
        },

        routes(){
            this.namespace = "api" ;
            
            this.get('/products' , schema => {
                return schema.products.all();       
            })

            this.get('/categories' , (schema , request) => {
                return schema.categories.all();
            });
        }
    })
}