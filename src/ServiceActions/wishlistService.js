import axios from 'axios';
import { toast } from 'react-toastify';

export const addtowishlist = async(maindata,token,cartDispatch) => {
    try{
        const response = await axios.post('/api/user/wishlist', 
        { maindata } , 
        {headers : {authorization : token }}
    );
    }catch(err){
        console.log('err in posting incart -',err);
        toast.error(err.message);
    }
};

export const removefromWishlist = () => {}
