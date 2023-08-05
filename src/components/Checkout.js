import React from 'react'
import Header from './Header'
import { useCart } from '../context/CartContext'
import { useFilter } from '../context/FilterContext';

const Checkout = () => {

      const {cartItems} = useCart();
      // const {filterState: {totalPrice}} = useFilter();

      let  discount = 30 * cartItems.length;
      const totalPrice = cartItems.reduce((acc,current) => acc + current.newPrice * current.qty,0);
      let deliveryCharge = totalPrice >= 500 ? 0 : 100;

      console.log('totalPrice -',totalPrice);

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
                  <p> Price ({cartItems.length}) items </p> 
                  <p> Rs. {totalPrice} </p>
                </div>
                <div className="price-row">
                   <p> Discount </p>
                   <p> Rs. {discount} </p>
                </div>
              </div>
            </>) : 
            (<>
                No Products to Checkout 
            </>)}
      </div>
    </>
  )
}

export default Checkout