import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import { BsFillCartFill } from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishListContext';
import { ImCancelCircle } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

   const { cartItems } = useCart();
   const { wishlistItems }  = useWishlist();
   const { auth }  = useAuth();

   const [showlinks,setshowlinks] = useState(false);

    const handlemenu = () => {
       setshowlinks(!showlinks);
    }

  return (
    <>
            <header>
                <div className = "grid grid-cols-2 text-xl w-full p-4 bg-slate-400">
                     
                     <div className="header-first-section">
                        <span id = "link-one" > <Link to = "/"> Assest Point  </Link> </span>
                     </div>


                     <div className="header-second-section justify-end">
                        <div className={`
                         bg-slate-400
                         md:grid md:grid-cols-2 md:w-[200px]  md:gap-0 md:top-0 md:static 
                         gap-8 absolute top-12 text-center py-2 w-full right-0
                         ${showlinks ? 'block' : 'hidden'}`}>
                           <div id = "link-one">
                              <Link to = "/products"> Shop  </Link> 
                           </div>
                           <div id = "link-one"> 
                              <Link to = "/profile"> Profile  </Link>
                           </div>
                        </div>

                        <div className='flex flex-row justify-end items-center'>
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

                        <span className='text-center relative flex justify-end md:hidden lg:hidden xl:hidden'>
                           <span onClick={() => handlemenu()} className='text-3xl'>  
                              {showlinks ? <ImCancelCircle /> :  <GiHamburgerMenu /> }
                            </span>
                        </span>

                     </div>
                </div>
            </header>
    </>
  )
}

export default Header