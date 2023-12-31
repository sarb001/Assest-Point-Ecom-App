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
    const [loader,setLoader] = useState(true);
    const {state} = useProduct();

    useEffect(()  => {
        (async () => {
          try {
            const response =  await axios.get('/api/products');
            console.log('reponse in products -',response);
            setLoader(false);
            setProducts(response.data.products);
          }catch(error){
            console.log('error is -',error);
          }
        })()
    },[]);

    const productsbyPrice    = getProductsbyPrice(Products,state.price);
    const productsbyCategory = getProductsbyCategory(productsbyPrice,state.category);
    
    const productsbyRating   = getProductsbyRating(productsbyCategory,state.rating);
    const finalproducts      = getProductsBySort(productsbyRating,state.sortBy);


  return (
    <>
     <Header  />
      <div className="products-container">

          <div className="filter-section">
              <span> <ProductFilter /> </span>
          </div>
          
          <div className="text-section">
            <h3> Total No. {finalproducts.length} of Products </h3>

              <div className = "all-products" style = {{display:'grid',gridTemplateColumns:'repeat(2,1fr)'}}>
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