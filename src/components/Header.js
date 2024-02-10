import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import { BsFillCartFill } from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishListContext';

const Header = () => {

   const { cartItems } = useCart();
   const { wishlistItems }  = useWishlist();
   const { auth }  = useAuth();

  return (
    <>
            <header>
                <div className = "header-container bg-slate-400">
                     <div className="header-first-section">
                        <span id = "link-one" > <Link to = "/"> Assest Point  </Link> </span>
                     </div>
                     <div className="header-second-section">
                        <span id = "link-one"> <Link to = "/products"> Shop  </Link> </span>
                        <span id = "link-one"> <Link to = "/profile"> Profile  </Link> </span>
                        <span id = "link-one"> 
                        <Link to = "/wishlist"> 
                         <AiOutlineHeart /> 
                         { auth.isLoggedIn ? wishlistItems.length : "0"}
                        </Link> </span>
                        <span id = "link-one">
                           <Link to = "/cart">
                             <BsFillCartFill /> 
                             { auth.isLoggedIn ? cartItems.length : "0"}
                            </Link> </span>
                     </div>
                </div>
            </header>
    </>
  )
}

export default Header