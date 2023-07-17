import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Cart = () => {
  return (
    <div className="cart-controller">
       <Header /> 
         <h2> No items in Cart  </h2>
       <Footer />
    </div>
  )
}

export default Cart