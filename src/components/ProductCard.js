import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart ,AiFillHeart } from 'react-icons/ai';
import ProductinCart  from '../utils/ProductinCart';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { addToCart } from '../ServiceActions/cartService';
import Productinwishlist from '../utils/Productinwishlist';
import { addtowishlist, removefromWishlist } from '../ServiceActions/wishlistService';
import { useWishlist } from '../context/WishListContext';

const ProductCard = ({maindata}) => {

    const { author , imgSrc , title , rating ,newPrice } = maindata;
  
    const {cartItems ,setcartItems} = useCart();
    const { setwishlistItems} = useWishlist();
    const { auth }   =  useAuth();
    const navigate = useNavigate();

    const isIteminCart      =  ProductinCart(maindata._id ,cartItems);
    const isIteminWishlist  =  Productinwishlist(maindata._id);


    const handleaddtocart = () => { 
       if(auth.isLoggedIn){
            addToCart(maindata,auth.token,setcartItems);
       }else{
            navigate('/login')
       }
    }


    const handleaddtowishlist = () => {
       if(auth.isLoggedIn){
            if(isIteminWishlist){
                removefromWishlist(maindata._id,auth.token,setwishlistItems);
            }else{
                addtowishlist(maindata,auth.token,setwishlistItems);
            }
       }else{
          navigate('/login')
       }
    }


  return (
    <>   
      <div className="product-container">
           <div className="product-section" style = {{backgroundColor:'lightgray',margin:'3%',width:'75%',color:'black'}}>

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

              <div className="addtocart-third-section" style = {{padding:'3%',display:'grid',gridTemplateColumns:'1fr 1fr'}}>

                   { isIteminCart ? (
                          <Link to = "/cart" className='btn btn-icon-text-outline'>
                               Go to Cart
                          </Link>
                   ) : (
                           <button style = {{padding:'4%'}}  onClick = {handleaddtocart} >
                               ADD  to Cart  
                            </button>
                   )}

                   { isIteminWishlist ? (
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                          <button  style = {{padding:'7%'}}  onClick = {handleaddtowishlist}>
                              <AiFillHeart  />
                          </button>
                        </span>
                    
                   ) : (
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                        <button onClick = {handleaddtowishlist}>
                          <AiOutlineHeart style = {{color : 'black'}} /> 
                        </button>
                        </span>
                   )}

              </div>
           </div>
      </div>
    </>
  )
}

export default ProductCard