import axios from 'axios';
import { toast } from 'react-toastify';

export const additemtowishlistHandler   = async(maindata,token,cartDispatch) => {
    try{
        const response = await axios.post('/api/user/wishlist', 
        { maindata } , 
        {headers : {authorization : token }}
    );
    userDispatch({
        type : "ADD_TO_WISHLIST",
        payload : response.data.wishlist,
    });
    toast.success(" Added to Wishlist ");
    }catch(err){
        console.log('err in posting incart -',err);
        toast.error(err.message);
    }
};

export const removeitemfromwishlistHandler = async(maindata,token,cartDispatch) => {
    try{
        const response = await axios.delete(`/api/user/wishlist/${productId}`,{
            headers : {authorization : token},
        });
        userDispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload : response.data.wishlist,
        });
        toast.success(" Removed from Wishlist ");
    }catch(err){
        console.log('err in Removing incart -',err);
        toast.error(err.message);
    }
}
