import React from 'react'

const CartProductCard = ({maindata}) => {
    const {imgSrc, title, author, oldPrice, newPrice, discount, qty } = maindata;

     let isAddedToWishList = 'fff';

    const handleWishlist = () => {}
    const handleProductDecrement = () => {}
    const handleProductIncrement = () => {}
    const handleRemoveFromCart   = () => {}

  return (
    <>
      <img src={imgSrc} alt="product-image" className="docs-hor-card-img"  style = {{width:'10%'}}  />
      <div className="horizontal-txt pd-xs">
        <div className="card-title">
          <h4>{title}</h4>
          <span
            className={
              isAddedToWishList ? "material-icons wishlist" : "material-icons"
            }
            onClick={handleWishlist}
          >
            favorite
          </span>
        </div>
        <p className="card-subtitle">{author}</p>
        <div className="card-pricing">
          <p className="card-price fw-bold">₹{newPrice}</p>
          <p className="card-price-cut">₹{oldPrice}</p>
          <p className="card-price-discount">({discount}% off)</p>
        </div>
        <div className="quantity-ctn">

          <button onClick = {handleProductDecrement}> Remove </button>

          <span className="quantity" style = {{padding:'3%'}}>{qty}</span>
          <button onClick = {handleProductIncrement}> Add  </button>
            
        </div>

                <button
                className="btn btn-icon-text-outline"
                onClick={handleRemoveFromCart}
                >
                Remove from Cart
                </button>
      </div>
    </>
  )
}

export default CartProductCard