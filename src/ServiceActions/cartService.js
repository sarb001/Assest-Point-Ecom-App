import  axios from  'axios';
import { toast } from 'react-toastify';

export const addToCart  = async(product,token,setcartItems) => {
    
        try{
            const response = await axios.post('/api/user/cart' ,
             {product} , 
             {headers : { authorization : token }}
            );
             setcartItems(response.data.cart);
            toast.success(" Added to Cart ");
        }catch(err){
             toast.error(err.message);
        }
}

export const removefromcart = async(product,token,setcartItems) => {
        try{
                const response = await axios.delete(`/api/user/cart/${product._id}` , {
                    headers : {  authorization :token },
                });
                setcartItems(response.data.cart);
                toast.success(" Removed From Cart ");
        }catch(err){
            toast.error(err.message);
        }
};

export const incrementproduct = async(maindata,token,setcartItems) => {
    try{
         const response = await axios.post(`/api/user/cart/${maindata._id}` , {
                action : { type : "INCREMENT" },
         },
         {
            headers : {  authorization :token },
         })
         setcartItems(response.data.cart);
         toast.success(' Increased Product Quantity ');
    }catch(err){
        toast.error(err.message)
    }
}

export const decrementproduct = async (maindata,token,setcartItems) => {
    try{
        const response = await axios.post(`/api/user/cart/${maindata._id}` , {
               action : { type : "DECREMENT" },
        },
        {
           headers : {  authorization :token },
        })
        setcartItems(response.data.cart);
        toast.success(' Decreased Product Quantity ');
   }catch(err){
       toast.error(err.message)
   }
}

export const clearCart = async(token) => {
    try{
         await axios.delete('/api/user/cart' ,{
            headers : { authorization : token }
         })
    }catch(err){
        toast.error(err.message)
    }
}