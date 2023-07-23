import  axios from  'axios';
import { toast } from 'react-toastify';


export const addToCart  = async(maindata,token,cartDispatch) => {
        try{
            const response = await axios.post('/api/user/cart' ,
            {maindata} , 
            {headers : { authorization : token }}
            );
            console.log('addto car -',response);
            cartDispatch({
                type : "ADD_TO_CART",
                payload : { cart : response.data.cart , price : maindata.newPrice },
            });
            toast.success(" Added to Cart ");
        }catch(err){
             console.log('err in posting incart -',err);
             toast.error(err.message);
        }
}

export const removefromcart = async(maindata,token,cartDispatch) => {
        try{
                
        }catch(err){
            console.log('err in posting incart -',err);
            toast.error(err.message);
        }
};