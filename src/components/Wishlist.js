import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useWishlist } from '../context/WishListContext'
import { useAuth } from '../context/AuthContext'
import CartLoader from './CartLoader'
import ProductCard from './ProductCard'
import WishlistProductCard from './WishlistProductCard'

const Wishlist = () => {

   const { wishlistItems  ,setwishlistItems } = useWishlist();
   const { auth }   = useAuth();
   const { token }  = useAuth();

  return (
  
   <>
   <div className="wishlist-container">
     <Header />
          <div className="wishlist-items">
             {wishlistItems.length == 0 ? (
             <>
               Not Items in WishList
               <CartLoader />
             </>) : 
             (
             <>
                  {wishlistItems?.map((item) => {
                     return (
                         <div className="items" key = {item.id} >
                             <WishlistProductCard   maindata = {item}  />
                         </div>
                     )
                  })}
             </>)}
          </div>
     <Footer />
   </div>
   </>
  )
}

export default Wishlist