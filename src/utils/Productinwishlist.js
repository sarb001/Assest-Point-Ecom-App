
     
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";
     
const Productinwishlist = (id) => {

       const { wishlistItems, setwishlistItems } =  useWishlist();
       return wishlistItems.find((item) => item._id === id);
}

export default Productinwishlist