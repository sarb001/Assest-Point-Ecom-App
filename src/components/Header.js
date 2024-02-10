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
                <div className = "header-container bg-slate-400 md:bg-red-600 lg:bg-green-600">
                     
                     <div className="header-first-section">
                        <span id = "link-one" > <Link to = "/"> Assest Point  </Link> </span>
                     </div>

                     <div className="header-second-section justify-end">
                        <div className='hidden' id = "link-one"> <Link to = "/products"> Shop  </Link> </div>
                        <div className='hidden' id = "link-one"> <Link to = "/profile"> Profile  </Link> </div>

                        <div className='flex flex-row justify-end items-center '>
                           <div> <Link to = "/wishlist">  <AiOutlineHeart /> </Link>
                           </div>
                           <div> 
                             { auth.isLoggedIn ? wishlistItems.length : "0"}
                           </div>
                        </div>

                        <div className='flex flex-row justify-end items-center'>
                           <div>  <Link to = "/cart"> <BsFillCartFill /> </Link> </div>
                           <div> 
                             { auth.isLoggedIn ? cartItems.length : "0"}
                           </div>
                        </div>

                        <span className='text-center'>
                           <span className='text-4xl'>  &#8801; </span>
                        </span>

                     </div>
                </div>
            </header>
    </>
  )
}

export default Header