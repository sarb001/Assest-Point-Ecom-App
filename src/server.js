import App from "./App";
import { Server } from 'miragejs';

export function makeServer(){
  return new Server({
        routes(){
            this.namespace = "api" ;
            
            this.get('/toclass' , () => {
                return {
                    todos: [
                        { id : "1" , text : "AAAA" },
                        { id : "2" , text : "BBBB" },
                        { id : "3" , text : "CCCC" },
                    ]
                }
            })
        }
    })
}