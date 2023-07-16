import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Products = () => {

   const [todos,seTodos] = useState([]);

   useEffect(() => {
     fetch('/api/toclass')
      .then(res => res.json())
      .then(json => {
         seTodos(json.todos);
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