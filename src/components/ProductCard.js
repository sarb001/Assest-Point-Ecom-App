import React from 'react'

const ProductCard = ({maindata}) => {

    const { author ,category ,discount , imgSrc , title , rating ,newPrice , oldPrice } = maindata;

  return (
    <>   
      <div className="product-container">
           <div className="product-section" style = {{backgroundColor:'lightsalmon',margin:'3%',width:'75%'}}>

              <div className="image-first-section" style = {{padding:'3%'}}>
                 <img src = {imgSrc} alt = {title}  style = {{width:'100%',height:'50vh'}} />
              </div>

              <div className="title-second-section">
                    <span> {title} </span>
                    <span> {author} </span>
                    <span> Rating - {rating} </span>
                    <span> Price  - {newPrice} </span>
              </div>

              <div className="addtocart-third-section" style = {{margin:'3%'}}>
                 <button> Add to Cart </button>
              </div>

           </div>
      </div>
    </>
  )
}

export default ProductCard