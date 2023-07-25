import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
import ProductCard from './ProductCard'
import CartLoader from './CartLoader'
import CartProductCard from './CartProductCard'

const Cart = () => {

   const { cartItems ,totalItems ,totalPrice  } = useCart();
   console.log('Data in cart here  -',cartItems);

   const discount = 30 * totalItems;
   let deliveryCharge = totalPrice >= 500 ? 0: 100;
   let amountPaid  = totalPrice + deliveryCharge - discount;

   const handleProceedToBuy = () => {
    
   }

  return (
    <div className="cart-controller">
       <Header />

       {cartItems.length === 0 ? ( 
        <>
            <div className="cart-msg" style = {{textAlign:'center'}}>
              <h2> Cart is Empty </h2>
            </div>
        </>
       ) :(
        <>
            Cart  Items are  -  
             {cartItems?.map((item) => {
                 return (
                    <div className = "cart-items"  key = {item._id} >
                       <CartProductCard  maindata = {item}   />
                    </div>
                 )
             }
             )}
        </>
       )}
           
       <Footer />
    </div>
  )
}

export default Cart