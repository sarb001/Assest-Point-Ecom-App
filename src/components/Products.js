import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import '../styles/Products.css';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { getProductsbyPrice } from '../sortingdata/getProductsbyPrice';
import { useProduct } from '../context/MainContext';
import { getProductsbyCategory } from '../sortingdata/getProductsbyCategory';
import { getProductsbyRating } from '../sortingdata/getProductsbyRating';
import { getProductsBySort } from '../sortingdata/getProductsBySort';

const Products = () => {

    const [Products,setProducts] = useState([]);
    const [setLoader] = useState(true);
    const {state} = useProduct();



    useEffect(()  => {
        (async () => {
          try {
            const response =  await axios.get('/api/products');
            setLoader(false);
            setProducts(response.data.products);

          }catch(error){
            console.log('error is -',error);
          }
        })()
    },[setLoader]);

    const productsbyPrice    = getProductsbyPrice(Products,state.price);
    const productsbyCategory = getProductsbyCategory(productsbyPrice,state.category);
    
    const productsbyRating   = getProductsbyRating(productsbyCategory,state.rating);
    const finalproducts      = getProductsBySort(productsbyRating,state.sortBy);


  return (
    <>
     <Header  />
      <div className="products-container" style= {{display:'grid',gridTemplateColumns:'1fr 2fr',
      margin:'2% 4%'}}>
          <div className="filter-section">
              <span> <ProductFilter /> </span>
          </div>
          <div className="text-section">
            <h2> Total No. {finalproducts.length} of Products </h2>

              <div className="all-products" style = {{display:'grid',gridTemplateColumns:'repeat(2,1fr)'}}>
                 {finalproducts.map((item) => (
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