import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
import ProductCard from './ProductCard'
import CartLoader from './CartLoader'

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

       {cartItems.length  > 0 ? ( 
        <>
          Cart with no Length
           <CartLoader /> 
        </>
       ) :(
        <>

           Items are   
             {cartItems?.map((item) => {
                 return (
                  <>
                   <h3> item is - {item.title} </h3>
                   <h3> item is - {item._id} </h3>
                  </>
                 )
             }
             )}
        </>
       )}


        {/* {cart && cart?.length > 0 ? () : () }
          <>  
                 <div className="cart-items">
                  {cart.map((item) => (
                    <div className="card-ctn" key = {item._id}>
                              <ProductCard   maindata = {item} />
                          </div>
                    ))}
                </div>

               <div className="price-ctn br-sm">
                <h3 className="text-center text-border">Price Details</h3>
                <div className="price-row">
                  <p>Price ({totalItems} items)</p>
                  <p>₹{totalPrice}</p>
                </div>
                <div className="price-row">
                  <p>Discount</p>
                  <p>- ₹{discount}</p>
                </div>
                <div className="price-row">
                  <p>Delivery charges</p>
                  <p>₹{deliveryCharge}</p>
                </div>
                <div className="price-row text-border fw-bold">
                  <p>Total Price</p>
                  <p>₹{amountPaid}</p>
                </div>
                <div className="order-btn">
                  <button
                    className="btn btn-primary text-center width-full"
                    onClick={handleProceedToBuy}
                  >
                    Proceed to buy
                  </button>
                </div>
              </div>
        </>
        ) : (
        <>
          Cart is Empty Nowss  
        </>)} */}
           
       <Footer />
    </div>
  )
}

export default Cart