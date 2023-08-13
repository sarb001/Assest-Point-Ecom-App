
     
import { useWishlist } from "../context/WishListContext";
     
const Productinwishlist = (id) => {

       const { wishlistItems } =  useWishlist();
       return wishlistItems.some((item) => item?._id === id);
}

export default Productinwishlist