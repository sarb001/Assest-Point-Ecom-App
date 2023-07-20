import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';


const ProductCard = ({maindata}) => {

    
    const { author ,category ,discount , imgSrc , title , rating ,newPrice , oldPrice } = maindata;
    console.log('maindataa -',maindata);

  return (
    <>   
      <div className="product-container">
        <Link to = {`/product/${maindata._id}`} style = {{textDecoration:'none'}}>

           <div className="product-section" style = {{backgroundColor:'lightsalmon',margin:'3%',width:'75%',color:'black'}}>

              <div className="image-first-section" style = {{padding:'3%'}}>
                 <img src = {imgSrc} alt = {title}  style = {{width:'100%',height:'50vh'}} />
              </div>

              <div className="title-second-section">
                    <b> {title} </b>
                    <small> {author} </small>
                     <div className="rating-price-section" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                    <span> Rating - {rating} </span>
                    <span> Price  - {newPrice} </span>
                     </div>

              </div>
              <div className="addtocart-third-section" style = {{margin:'3%',display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                 <button style = {{margin:'1%'}}> Add to Cart </button>
                 <span style = {{cursor:'pointer',textAlign:'center'}}> <AiOutlineHeart /> </span>
              </div>

           </div>

        </Link>
      </div>
    </>
  )
}

export default ProductCard