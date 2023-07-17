import React from 'react'
import CategoryData from './CategoryData'
import RatingData from './RatingData'

const ProductFilter = () => {

    const handlerange = () => {}
    const handlecheckbox = () => {}
    const handlerating = () => {}
    const handlesorting = () => {}

    const categoryData = [
        {
            title : "self-help",
            label:  "self-help",
        },
        {
            title : "stock",
            label: "Stock investing",
        },
        {
            title : "real-estate",
            label: "Real Estate Investing",
        },
    ]
    
    const ratingData = [
        {
            title : "4-Star",  
            label : '4 stars & above' 
        },
        {
            title : "3-Star",  
            label : '3 stars & above' 
        },
        {
            title : "2-Star",  
            label : '2 stars & above' 
        },
        {
            title : "1-Star",  
            label : '1 stars & above' 
        },
    ]

  return (
    <>
        <div className = "productfilter-container">
                <div className="clearbtn-section">
                    <h3> Filters </h3>
                    <button> Clear </button>
                </div>

                <div className="range-section">
                 <h3> Price </h3>
                 <input  
                    type = "range" 
                    onChange={handlecheckbox}
                    /> 
                </div>

                <div className="category-section">
                        <h3> Category </h3>
                     {categoryData.map((item) => (
                        <CategoryData  item = {item}  />
                     ))}
                      
                </div>

                <div className="rating-section">
                <h3> Rating </h3>
                    {ratingData.map((item) => (
                    <RatingData  item = {item} />
                    ))}
                </div>

                <div className="sorting-section">
                  <h3> Sort by  </h3>
                     <div className="low-to-high">
                      <input  type = "radio" 
                     />
                     <span> Price - Low to High  </span>
                    </div>
                     <div className="high-to-low">
                      <input  type = "radio" 
                     />
                     <span> Price - High to Low  </span>
                  </div>
                </div>
        </div>
    </>
  )
}

export default ProductFilter