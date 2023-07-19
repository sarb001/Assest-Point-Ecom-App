import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import axios from 'axios' ;

const SingleProduct = () => {

    const [product,setProduct] = useState({});
    const [loader,setLoader] = useState(true);
    const params = useParams();

    useEffect(() => {

        (async () => {
            try{
                const response = await axios.get(`/api/products/${params.productId}`);
                setLoader(false);
                setProduct(response.data.product);
                console.log('response is -',response);
            }catch(err){
                console.log('Single product --',err);
            }
        })();
    },[params.productId])

    const handleRemoveFromWishList = () => {}
    const handleAddToWishList = () => {}
    const handleAddToCart = () => {}
    



  return (
    <>
            <Header />
        <div className="single-product" style = {{margin:'3%'}}>
             <section className="single-product-ctn" style  = {{display:'grid',gridTemplateRows:'1fr 1fr'}}>
                <div className="product-card" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>

                    <div className="image-section">
                        <img
                            src={product.imgSrc} style = {{width:'50%'}}
                            alt={product.title}
                            className="product-img"  />
                    </div>

                    <div className="product-info">
                        <div className="product-title">
                        <h2>{product.title}</h2>
                        </div>
                        <p className="author">{product.author}</p>

                        <div className="badge-rating br-sm">
                        <span>{product.rating}</span>
                        <span className="material-icons rating-fill">star</span>
                        </div>

                        <div className="product-price">
                        <p className="price fw-bold">₹{product.newPrice}</p>
                        <p className="price-cut">₹{product.oldPrice}</p>
                        <p className="price-discount">({product.discount}% off)</p>
                        </div>
                        <p>inclusive of all taxes</p>
                        <div className="cta-btns" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                        
                            <span>
                                <button style = {{padding:'2%'}}
                                className="btn btn-icon-text" onClick={handleAddToCart}>
                                {/* <span className="material-icons">shopping_cart</span> */}
                                    Add to cart
                                </button>
                            </span>
                           
                            

                            <span>
                                <button style = {{padding:'2%'}}
                                className="btn btn-icon-text-outline"
                                onClick={handleAddToWishList}>
                                {/* <span className="material-icons">favorite_border</span> */}
                                Add to wishlist
                                </button>
                            </span>
                           
                        
                        </div>
                    </div>
                </div>
                <div className="product-data-ctn">
                <div className="product-des">
                    <h3 className="pd-bottom-lg">Description</h3>
                    <p>
                    Timeless lessons on wealth, greed, and happiness doing well with
                    money isn?t necessarily about what you know. It?s about how you
                    behave. And behavior is hard to teach, even to really smart
                    people. How to manage money, invest it, and make business
                    decisions are typically considered to involve a lot of
                    mathematical calculations, where data and formulae tell us exactly
                    what to do. But in the real world, people don?t make financial
                    decisions on a spreadsheet. They make them at the dinner table, or
                    in a meeting room, where personal history, your unique view of the
                    world, ego, pride, marketing, and odd incentives are scrambled
                    together. In the psychology of money, the author shares 19 short
                    stories exploring the strange ways people think about money and
                    teaches you how to make better sense of one of life?s most
                    important matters.
                    </p>
                </div>
                <div className="product-data">
                    <h3 className="pd-bottom-lg">Details</h3>
                    <p className="pd-bottom-md">
                    <span className="fw-bold">Publisher:</span> Jaico Publishing House{" "}
                    </p>
                    <p className="pd-bottom-md">
                    <span className="fw-bold">Language:</span> English
                    </p>
                    <p className="pd-bottom-md">
                    <span className="fw-bold">Format: </span>Paperback, 252 pages
                    </p>
                    <p className="pd-bottom-md">
                    <span className="fw-bold">Item Weight:</span> 220 g
                    </p>
                    <p className="pd-bottom-md">
                    <span className="fw-bold">Dimensions:</span> 20 x 14 x 4 cm
                    </p>
                </div>
                </div>
             </section>
        </div>
    </>
  )
}

export default SingleProduct