import React from 'react'
import Header from './Header'
import { useCart } from '../context/CartContext'
import { useFilter } from '../context/FilterContext';
import  { Razorpay } from 'razorpay';
import { clearCart } from '../ServiceActions/cartService';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {

  // key_id,
  // rzp_test_mU5bOisi1IOxbr,

  // key_secret
  // ntASG4lPQyzErj0E7sprkdZZ
  
      const {cartItems} = useCart();

      let  discount = 30 * cartItems.length;
      const totalPrice = cartItems.reduce((acc,current) => acc + current.newPrice * current.qty,0);
      let deliveryCharge = totalPrice >= 500 ? 0 : 100;

       const { auth }  = useAuth();
       const navigate = useNavigate();
       console.log('totalPrice -',totalPrice);
  
     const handlePayment = () => {
      try{
         console.log(' First Section 1  ');

        const options = {
          key: "rzp_test_mU5bOisi1IOxbr",
          amount: (totalPrice + deliveryCharge - discount) * 100,
          currency: "INR",
          name: "Asset Point",
          description: "Thank you for shopping with us",
          image: "",
          handler: async (response) => {
            clearCart(auth.token);
            // userDispatch({type: "PROCESS_ORDER"});
            // userDispatc  ({type: "CLEAR_CART"});
            toast.success("The payment was successfull");
            navigate(`/order/${response.razorpay_payment_id}`);
          },
          prefill: {
            name: "Sarb Singh",
            email: "mrsinghbusiness05@gmail.com",
            contact: "9878844566",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#6d28d9",
          },
        };
  
        console.log(' Second Section 2 -- ');
        const razorpayGateway = new window.Razorpay(options);
        razorpayGateway.open();
        console.log(' Third After 33 -- ');
      
      }catch(err){
          console.log('error is -',err);
          toast.error(" Error in PAYMENT ")
      }
     }

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
                <div className="price-row">
                  <p> Delivery Charges </p>
                  <p>₹{deliveryCharge}</p>
                </div>
                  <div className="price-row text-border">
                  <p> Total Price </p>
                  <p> ₹{totalPrice + deliveryCharge  - discount} </p>
                  </div>
                  <button style = {{ padding:'1% 2%'}}  onClick = {handlePayment} >
                    Proceed to Payment 
                  </button>
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