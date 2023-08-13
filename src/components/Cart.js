import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useCart } from '../context/CartContext';
import CartProductCard from './CartProductCard'
import { useFilter } from '../context/FilterContext'
import { useNavigate } from 'react-router-dom';
import  '../styles/Cart.css';


const Cart = () => {

   const { cartItems } = useCart();
   const { filterState ,filterDispatch } = useFilter();
   const navigate = useNavigate();

   const totalOldPrice = cartItems.reduce((acc,current) => acc + current.oldPrice * current.qty, 0)
   const totalPrice = cartItems.reduce((acc,current) => acc + current.newPrice * current.qty,0);
 
   let Discount  = 30 * cartItems.length;
   let deliveryCharge = totalPrice >= 500 ? 100 : 0;
   let amountPaid = totalPrice + deliveryCharge - Discount;

   const [clickcount,setclickcount] = useState(0);

   const handleclick = () => {
       setclickcount(clickcount + 1);
      }

       let message ;
       if(clickcount === 0) {
         message  = ' Make Payment ';
       }else if(clickcount === 1){
         message = " Payment Completed ";
       }


  return (
    <div className="cart-controller">
       <Header />

       {cartItems.length === 0 ? ( 
        <>
            <div className="cart-msg" >
              <h2> Cart is Empty </h2>
            </div>
        </>
       ) :(
        <>  
             <div className="cart-container" >

                        <div className="cart-item" >
                              {cartItems?.map((item) => {
                                 return (
                                    <div className = "card-items"  key = {item._id} >
                                       <CartProductCard  maindata = {item}   />
                                    </div>
                                 )
                              }
                              )}
                        </div>  

                        <div className="total-items">

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
                                    <p>Total Price  - </p>
                                    <p>₹{amountPaid}</p>
                                 </div>

                                 <button style = {{padding:'2%'}} onClick={handleclick}>
                                    <p> {message}</p> 
                                 </button>
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