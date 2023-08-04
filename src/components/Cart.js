import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
import ProductCard from './ProductCard'
import CartLoader from './CartLoader'
import CartProductCard from './CartProductCard'
import { useFilter } from '../context/FilterContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

   const { cartItems } = useCart();
   const { filterState ,filterDispatch } = useFilter();
   const navigate = useNavigate();
   console.log('Data in cart here  -',cartItems);

   const totalOldPrice = cartItems.reduce((acc,current) => acc + current.oldPrice * current.qty, 0)
  const totalPrice = cartItems.reduce((acc,current) => acc + current.newPrice * current.qty,0);
 
   let Discount  = 30 * cartItems.length;
   let deliveryCharge = totalPrice >= 500 ? 100 : 0;
   let amountPaid = totalPrice + deliveryCharge - Discount;

   console.log('total Price -',totalPrice);

   const handleProceedToBuy = () => {
      filterDispatch({type : "ADD_AMOUNT_TO_PAY" , payload : amountPaid})
      navigate('/checkout');
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
             <div className="cart-container" style = {{display:'grid',gridTemplateColumns:'2fr 1fr',margin:'2%'}}>

                <div className="cart-item" style = {{padding:'3%'}}>
                     {cartItems?.map((item) => {
                        return (
                           <div className = "cart-items" style = {{padding:'5% 2%'}} key = {item._id} >
                              <CartProductCard  maindata = {item}   />
                           </div>
                        )
                     }
                     )}
               </div>  

                 <div className="total-items" style = {{padding:'4%'}}>

                     <div className="price-ctn br-sm">
                        <h3 className="text-center text-border">Price Details</h3>
                        <div className="price-row">
                           <p>Price ({cartItems.length} items)</p>
                           <p>₹{totalPrice}</p>
                        </div>
                        <div className="price-row">
                           <p>Discount</p>
                           <p>- ₹{Discount}</p>
                        </div>
                        <div className="price-row">
                           <p>Delivery charges</p>
                           <p>₹{deliveryCharge}</p>
                        </div>
                        <div className="price-row text-border fw-bold">
                           <p>Total Price</p>
                           <p>₹{totalPrice}</p>
                        </div>

                        <div className="order-btn">
                           <button
                              className="btn btn-primary text-center width-full"
                              onClick={handleProceedToBuy}
                           >
                              Proceed to Payment
                           </button>
                        </div>

                     </div>

                </div>
         </div>
        </>
       )}
           
       <Footer />
    </div>
  )
}

export default Cart