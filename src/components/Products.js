import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Products = () => {

   const [prod,setprod] = useState([]);
   const [cat,setcat]   = useState([]);

   useEffect(() => {
     fetch('/api/categories')
    //  fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        //  setprod(json.prod);
         setcat(json.cat);
         console.log('ssss')
      })
      .catch(e => {
        console.log('Error here - ');
      })
   },[])


  return (
    <>
     <Header  />
      <div className="products-container" style= {{display:'grid',gridTemplateColumns:'1fr 1fr',margin:'2% 1%'}}>
          <div className="filter-section">
              <span> Filters </span>
          </div>
          <div className="text-section">
            <span> Total Items </span>
          </div>
      </div>
     <Footer />
    </>
  )
}

export default Products