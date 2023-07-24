import  axios from  'axios';
import { toast } from 'react-toastify';

export const addToCart  = async(maindata,token,setcartItems) => {
        try{
            const response = await axios.post('/api/user/cart' ,
             {maindata} , 
             {headers : { authorization : token }}
            );
            console.log('add to cart -',response);
             setcartItems(response.data.cart);
            toast.success(" Added to Cart ");
        }catch(err){
             console.log('err in posting incart -',err);
             toast.error(err.message);
        }
}

export const removefromcart = async(maindata,token,setcartItems) => {
        try{
                const response = await axios.delete(`/api/user/cart/${id}` , {
                    headers : {  authorization :token },
                });
                setcartItems(response.data.cart);
                toast.success(" Removed From Cart ");
        }catch(err){
            console.log('err in posting incart -',err);
            toast.error(err.message);
        }
};