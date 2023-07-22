
import { useCart } from "../context/CartContext";

export const isProductinWishlist = (id) => {
     const {cartState} = useCart();
     return cartState.wishlist.some((item) => item._id === id);
};
