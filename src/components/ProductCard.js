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
      <div className="product-container flex justify-center">
           <div className="product-section bg-slate-400 w-[95%] text-black m-[3%] md:w-3/4 " >

               <div>
               <Link to = {`/product/${maindata._id}`} style = {{textDecoration:'none'}}>
                    <div className="image-first-section" style = {{padding:'3%'}}>
                         <img src = {imgSrc} alt = {title}  
                         className='w-full h-[50vh]' />
                    </div>
               </Link>
               </div>

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
                          <Link to = "/cart" className ='bg-slate-600'>
                               Go to Cart
                          </Link>
                   ) : (
                           <button style = {{padding:'4%'}} className ='bg-slate-600' onClick = {handleaddtocart} >
                               ADD  to Cart  
                            </button>
                   )}

                   { isIteminWishlist ? (
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                          <button className='bg-slate-400'  style = {{padding:'7%'}}  onClick = {handleaddtowishlist}>
                              <AiFillHeart  />
                          </button>
                        </span>
                    
                   ) : (
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                        <button className='bg-slate-400 w-[30%] h-full flex justify-center items-center'  onClick = {handleaddtowishlist}>
                           <span>
                              <AiOutlineHeart className='w-full h-full' style = {{color : 'black'}} /> 
                          </span>
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