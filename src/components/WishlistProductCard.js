import React from 'react'
import { Link } from 'react-router-dom';
import ProductinCart from '../utils/ProductinCart';

const WishlistProductCard = ({maindata}) => {
    
  const {imgSrc, title, author, oldPrice, newPrice, discount} = maindata;

  let isAddedToCart = ProductinCart(maindata._id , )
  const handleRemoveWishlist = () => {}
  const handleMoveToCart = () => {}

  return (
    
      <>
      <img className="card-img" src = {imgSrc} alt={title} style = {{width:'20%'}} />
      <div className="card-title">
        <h4>{title}</h4>
        <span
          className="material-icons wishlist"
          onClick={handleRemoveWishlist}
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
      {isAddedToCart ? (
        <Link to="/cart" href="#" className="btn btn-icon-text-outline">
          Go to cart
        </Link>
      ) : (
        <button className="btn btn-icon-text" onClick={handleMoveToCart}>        
          Move to cart
        </button>
      )}
      </>
  )
}

export default WishlistProductCard