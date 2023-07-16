import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Products = () => {
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