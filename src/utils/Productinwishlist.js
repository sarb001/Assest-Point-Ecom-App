
     
import { useCart } from "../context/CartContext";
     
const Productinwishlist = (id) => {

       const {cartState} = useCart();
       return cartState.wishlist.some((item) => item._id === id);
}

export default Productinwishlist