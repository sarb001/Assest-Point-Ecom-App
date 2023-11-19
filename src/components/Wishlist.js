import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useWishlist } from '../context/WishListContext';
import WishlistProductCard from './WishlistProductCard'

const Wishlist = () => {

   const { wishlistItems  } = useWishlist();
  return (
   <>
   <div className="wishlist-container">
     <Header />
          <div className="wishlist-items">
             {wishlistItems.length === 0 ? (
             <>
                <div className="wishlist-msg" style = {{textAlign:'center'}}>
                   <h2>  WishList is Empty </h2>
                </div>
             </>
             ) : 
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
   </div>
   </>
  )
}

export default Wishlist