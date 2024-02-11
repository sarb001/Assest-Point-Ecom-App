import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import ProductinCart from '../utils/ProductinCart';
import { useCart } from '../context/CartContext';
import { addToCart } from '../ServiceActions/cartService';
import { useAuth } from '../context/AuthContext';
import  axios from  'axios';
import { toast } from 'react-toastify';
import { MdCancel } from "react-icons/md";
import { useWishlist } from '../context/WishListContext';


const WishlistProductCard = ({maindata}) => {
    
  const {imgSrc, title, author, oldPrice, newPrice, discount} = maindata;

  const { cartItems ,setcartItems } = useCart();
    const { wishlistItems,setwishlistItems }     = useWishlist();

  let isAddedToCart = ProductinCart(maindata._id , cartItems);
  console.log('is Added -',isAddedToCart);
  const navigate = useNavigate();
  const { auth }  = useAuth();

  const handleRemoveWishlist = async(product,token,setwishlistItems) => {
    try{
        const response = await axios.delete(`/api/user/wishlist/${product._id}` , {
            headers : {  authorization :token },
        });
        console.log('repsosie -',response);
        setwishlistItems(response.data.wishlist);
        toast.success(" Removed From WishList ");
      }catch(err){
        toast.error(err.message);
      }
  }

  const handleMoveToCart = () => {
    if(auth.isLoggedIn){
          addToCart(maindata,auth.token,setcartItems);
    }else{
          navigate('/login')
    }
}

  return (
      <>
        <div >
        <img className="card-img" src = {imgSrc} alt={title} style = {{width:'20%'}} />
      
        <div className="card-title">
          <h4>{title}</h4>
          <span
            className="material-icons wishlist"
            onClick={() => handleRemoveWishlist(maindata,auth.token,setwishlistItems)}
            >
             <MdCancel />
          </span>
        </div>

        <p className="card-subtitle">{author}</p>

        <div className="card-pricing">
          <p className="card-price fw-bold">₹{newPrice}</p>
          <p className="card-price-cut">₹{oldPrice}</p>
          <p className="card-price-discount">({discount}% off)</p>
        </div>

        {isAddedToCart ? (
          <Link to="/cart" href="#" className="btn btn-icon-text-outline">
            Go to cart
          </Link>
        ) : (
          <button className="btn btn-icon-text" onClick={handleMoveToCart}>        
            Move to cart
          </button>
        )}
        </div>
      </>
  )
}

export default WishlistProductCard