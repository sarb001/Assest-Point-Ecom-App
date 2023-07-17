import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import '../styles/Products.css';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

const Products = () => {

    const [Products,setProducts] = useState([]);
    const [Loader,setLoader] = useState(true);

    useEffect(()  => {
        (async () => {
          try {
            const response =  await axios.get('/api/products');
            setLoader(false);
            setProducts(response.data.products);
            console.log('response is -',response.data.products);
          }catch(error){
            console.log('error is -',error);
          }
        })()
    },[])


  return (
    <>
     <Header  />
      <div className="products-container" style= {{display:'grid',gridTemplateColumns:'1fr 2fr',margin:'2% 4%'}}>
          <div className="filter-section">
              <span> <ProductFilter /> </span>
          </div>
          <div className="text-section">
            <h2> Total No. of Products </h2>
              <div className="all-products" style = {{display:'grid',gridTemplateColumns:'repeat(2,1fr)'}}>
                 {Products.map((item) => (
                    <ProductCard  maindata = {item}  key = {item.title} />
                  )
                 )}
              </div>
          </div>
      </div>
     <Footer />
    </>
  )
}

export default Products