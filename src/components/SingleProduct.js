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


  return (
    <>
            <Header />
        <div className="single-product">
             Params ID here  is ---- { params.productId }
             <h1> {product.title} </h1>
        </div>
    </>
  )
}

export default SingleProduct