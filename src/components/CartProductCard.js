import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { decrementproduct, incrementproduct, removefromcart } from '../ServiceActions/cartService';

const CartProductCard = ({maindata}) => {
    const {imgSrc, title, author, oldPrice, newPrice, discount, qty } = maindata;
    const { auth } = useAuth();
    const { setcartItems } = useCart();

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
      <div className="cartproduct-container" style = {{display:'grid',gridTemplateColumns:'1fr 1fr' ,backgroundColor:'rebeccapurple'}}>
           <div className="image-container" style = {{textAlign:'center'}}>
              <img src={imgSrc} alt = "product" className="docs-hor-card-img"  style = {{width:'50%',padding:'4% 1%'}}  />
           </div>

             <div className="item-details" style = {{color:'white'}}>
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
                      <button style = {{padding:'2% 4%'}} onClick = {handleProductDecrement}>  <b> - </b> </button>

                      <span className="quantity" style = {{padding:'3%',color:'white'}}>{qty}</span>
                      <button  style = {{padding:'2% 4%'}} onClick = {handleProductIncrement}>  <b> + </b>   </button>
                        
                    </div>
                     <span style = {{paddingTop:'6%'}}>
                          <button style = {{padding:'3%'}} onClick={handleRemoveFromCart} >
                          Remove from Cart
                          </button>
                      </span>
                </div>
            </div>
      </div>
    </>
  )
}

export default CartProductCard