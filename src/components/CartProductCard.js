import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { decrementproduct, incrementproduct, removefromcart } from '../ServiceActions/cartService';

const CartProductCard = ({maindata}) => {
    const {imgSrc, title, author, oldPrice, newPrice, discount, qty } = maindata;
    const { auth } = useAuth();
    const {  cartItems , setcartItems } = useCart();

    const handleRemoveFromCart   = () => {
         removefromcart(maindata,auth.token,setcartItems);
    }

    const handleProductDecrement = () => {
      if(qty >= 2 ){
        decrementproduct(maindata,auth.token,setcartItems);
      }
      }

      const handleProductIncrement = () => {
        incrementproduct(maindata,auth.token,setcartItems);
    }

  return (
    <>
      <img src={imgSrc} alt="product-image" className="docs-hor-card-img"  style = {{width:'10%'}}  />
      <div className="horizontal-txt pd-xs">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <p className="card-subtitle">{author}</p>
        <div className="card-pricing">
          <p className="card-price fw-bold">₹{newPrice}</p>
          <p className="card-price-cut">₹{oldPrice}</p>
          <p className="card-price-discount">({discount}% off)</p>
        </div>
        <div className="quantity-ctn">

          <button style = {{padding:'1%'}} onClick = {handleProductDecrement}> Remove -- </button>

          <span className="quantity" style = {{padding:'3%'}}>{qty}</span>
          <button  style = {{padding:'1%'}} onClick = {handleProductIncrement}> Add ++ </button>
            
        </div>
                <button className="btn btn-icon-text-outline"
                onClick={handleRemoveFromCart} >
                Remove from Cart
                </button>
      </div>
    </>
  )
}

export default CartProductCard