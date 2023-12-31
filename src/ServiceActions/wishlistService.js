import axios from 'axios';
import { toast } from 'react-toastify';


export const addtowishlist   = async(product,token,setwishlistItems) => {
    try{
        const response = await axios.post('/api/user/wishlist', 
        { product } , 
        {headers : {authorization : token }}
    );
    setwishlistItems(response.data.wishlist);
    toast.success(" Added to Wishlist ");
    }catch(err){
        toast.error(err.message);
    }
};

export const removefromWishlist = async(productId,token,setwishlistItems) => {
    try{
        const response = await axios.delete(`/api/user/wishlist/${productId}`,{
            headers : {authorization : token},
        });
        setwishlistItems(response.data.wishlist);
        toast.success(" Removed from Wishlist ");
    }catch(err){
        toast.error(err.message);
    }
}
