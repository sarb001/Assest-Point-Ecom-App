import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart ,AiFillHeart } from 'react-icons/ai';
import ProductinCart, { isProductinCart } from '../utils/ProductinCart';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { addToCart } from '../ServiceActions/cartService';
import Productinwishlist, { IsproductinWishlist } from '../utils/Productinwishlist';
import { addtowishlist, removefromWishlist } from '../ServiceActions/wishlistService';



const ProductCard = ({maindata}) => {

    const { author ,category ,discount , imgSrc , title , rating ,newPrice , oldPrice } = maindata;
    console.log('maindataa -',maindata);

    const {cartState ,cartDispatch} = useCart();
    const { auth }   =  useAuth();
    const navigate = useNavigate();

    const isIteminCart      =  ProductinCart(maindata._id ,cartState.cart);
    const isIteminWishlist  =  Productinwishlist(maindata._id);

    const handleaddtocart = () => { 
       if(auth.isLoggedIn){
            addToCart(maindata,auth.token,cartDispatch);
       }else{
            navigate('/login')
       }
    };

    const handleaddtowishlist = () => {
       if(auth.isLoggedIn){
            if(isIteminWishlist){
                removefromWishlist(maindata._id,auth.token,cartDispatch);
            }else{
                addtowishlist(maindata,auth.token,cartDispatch);
            }
       }else{
          navigate('/login')
       }
    }
    

  return (
    <>   
      <div className="product-container">

           <div className="product-section" style = {{backgroundColor:'lightsalmon',margin:'3%',width:'75%',color:'black'}}>

        <Link to = {`/product/${maindata._id}`} style = {{textDecoration:'none'}}>
              <div className="image-first-section" style = {{padding:'3%'}}>
                 <img src = {imgSrc} alt = {title}  style = {{width:'100%',height:'50vh'}} />
              </div>
        </Link>
              <div className="title-second-section">
                    <b> {title} </b>
                    <small> {author} </small>
                     <div className = "rating-price-section" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                        <span> Rating - {rating} </span>
                        <span> Price  - {newPrice} </span>
                     </div>

              </div>

              <div className="addtocart-third-section" style = {{margin:'3%',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                 

                   {  isIteminCart ? (
                          <Link to = "/cart">
                            <button style = {{margin:'2%'}}  >
                               Go to Cart 
                            </button>
                          </Link>
                   ) : (
                           <button style = {{margin:'1%'}}  onClick = {handleaddtocart} >
                               Add to Cart here   
                            </button>
                   )
                   }

                   { isIteminWishlist ? (
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                          <button>
                              <AiFillHeart  style = {{color : 'red'}} />
                          </button>
                        </span>
                    
                   ) : (
                  
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                        <button onClick = {handleaddtowishlist}>
                          <AiOutlineHeart style = {{color : 'black'}} /> 
                        </button>
                        </span>
                    
                   )
                   }

              </div>

           </div>
      </div>
    </>
  )
}

export default ProductCard