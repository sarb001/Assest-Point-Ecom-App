import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHeart ,AiFillHeart } from 'react-icons/ai';
import { isProductinCart } from '../utils/isProductinCart';
import { isProductinWishlist } from '../utils/isProductinWishlist';
import { useCart } from '../context/CartContext';


const ProductCard = ({maindata}) => {

    
    const { author ,category ,discount , imgSrc , title , rating ,newPrice , oldPrice } = maindata;
    console.log('maindataa -',maindata);

    const {cartState} = useCart();

    const isIteminCart  = isProductinCart(maindata._id ,cartState.cart);
   
    const isIteminWishlist  = isProductinWishlist(maindata._id);

    const handleaddtocart = () => { 
       if(isIteminCart){
        
       }else{

       }
    };
    const handleaddtowishlist = () => { }
    const handleremovefromwishlist = () => { }
    

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
                 

                   <button style = {{margin:'1%'}}  onClick = {handleaddtocart} >
                     Add to Cart
                    </button>

                   {  isIteminCart ? (
                          <Link to = "/cart">
                            <button style = {{margin:'2%'}}  >
                               Go to Cart 
                            </button>
                          </Link>
                   ) : (
                           <button style = {{margin:'1%'}}  >
                               Add to Cart here   
                            </button>
                   )
                   }

                   { isIteminWishlist ? (
                        <span style = {{cursor:'pointer',textAlign:'center'}}> 
                          <button  onClick = {handleremovefromwishlist}>
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