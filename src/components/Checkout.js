import React from 'react'
import Header from './Header'
import { useCart } from '../context/CartContext'

const Checkout = () => {

      const {cartItems} = useCart();
      let discount = 30 * cartItems.length;
      const totalPrice = cartItems.reduce((acc,current) => acc + current.newPrice * current.qty,0);
      let deliveryCharge = totalPrice >= 500 ? 0 : 100;

  return ( 
    <> 
     <Header />
      <div className="checkout-container">
            <h2 className='text-center'> Checkout </h2>
            {cartItems.length > 0 ? (
            <>
              <div className="cart-mang-ctn">
                <div className="address-ctn pd-md">
                </div>
                <div className="price-ctn br-sm">
                   <h3> Price Details </h3>
                </div>
                <div className="price-row">
                  <p> Price ({cartItems}) items </p> 
                  <p> Rs. {totalPrice} </p>
                </div>
                <div className="price-row">
                   <p> Discount </p>
                   <p> Rs. {discount} </p>
                </div>
              </div>
            </>) : 
            (<>
                
            </>)}
      </div>
    </>
  )
}

export default Checkout