import  { createContext, useContext, useEffect, useState }  from 'react' ;
import  axios from 'axios' ;
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

const WishlistProvider = ({children}) => {

    const [wishlistItems,setwishlistItems] = useState([]);
    const { auth }   = useAuth();
    const { token }  = useAuth();

    useEffect(() => {
        if(token){
            (async () => {
                try{
                     const response = await axios.get('/api/user/wishlist' , {
                        headers : {  authorization : token },
                     });
                     if(response.status === 200){
                        setwishlistItems(response.data.wishlist);
                     }
                }catch(error){
                    console.log('error ');
                }
            })();
        }else{
            setwishlistItems([]);
        }  
    },[token]) 

    return (
        <WishlistContext.Provider value = {{ wishlistItems , setwishlistItems}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export {  WishlistProvider , useWishlist };