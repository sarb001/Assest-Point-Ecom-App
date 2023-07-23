import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import { BsFillCartFill } from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {

   const { cartState , cartDispatch } = useCart();
   const { auth }  = useAuth();

  return (
    <>
            <header>
                <div className = "header-container">
                     <div className="header-first-section">
                        <span id = "link-one" > <Link to = "/"> Assest Point  </Link> </span>
                     </div>
                     <div className="header-second-section">
                        <span id = "link-one"> <Link to = "/products"> Shop  </Link> </span>
                        <span id = "link-one"> <Link to = "/profile"> Profile  </Link> </span>
                        <span id = "link-one"> 
                        <Link to = "/wishlist"> 
                         <AiOutlineHeart /> 
                         { auth.isLoggedIn ? cartState.wishlist.length : "0"}
                        </Link> </span>
                        <span id = "link-one">
                           <Link to = "/cart">
                             <BsFillCartFill /> 
                             { auth.isLoggedIn ? cartState.cart.length : "0"}
                            </Link> </span>
                     </div>
                </div>
            </header>
    </>
  )
}

export default Header