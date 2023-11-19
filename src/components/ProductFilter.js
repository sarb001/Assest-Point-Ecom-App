import React from 'react'
import CategoryData from './CategoryData'
import RatingData from './RatingData'
import { useProduct } from '../context/MainContext'

const ProductFilter = () => {


    const { state , dispatch } = useProduct();
    const { price ,category , sortBy } = state;

        const categoryData = [       
            
            {
                title : "self-help",
                label:  "self-help",
                isChecked : category.selfHelp,
                actionType : "SELF_HELP"
            },

            {
                title : "stock",
                label: "Stock investing",
                isChecked : category.stockInvesting,
                actionType : "STOCK_INVESTING",
            },

            {
                title : "real-estate",
                label: "Real Estate Investing",
                isChecked : category.realEstate,
                actionType : "REAL_ESTATE",
            },
         ]
    
         const ratingData = [
        {
            title : "4-Star",  
            label : '4 stars & above',
            star : 4
        },
        {
            title : "3-Star",  
            label : '3 stars & above',
            star : 3
        },
        {
            title : "2-Star",  
            label : '2 stars & above',
            star : 2
        },
        {
            title : "1-Star",  
            label : '1 stars & above',
            star : 1
        },
         ]

  return (
    <>
        <div className = "productfilter-container">
                <div className = "clearbtn-section">
                  <div style = {{margin:'1%'}}v>  <h3> Filters </h3></div> 
                    <button id = "clear-btn" onClick = {() => dispatch({type : "CLEAR"})} > 
                    Clear </button>
                </div>

                <div className="range-section" >
                    <div style = {{margin:'2%'}}>
                       <h3> Price </h3>    
                    </div>
                        <div className="slider-value" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',width:'30%'}}>
                         <p> 100 </p>
                         <p> 500 </p>
                         <p> 1000 </p>
                        </div>      
                        <div className="filter-slider">
                         <input type = "range" 
                          name = "price" min = "100"
                          max = "1000"  value = {price}
                          onChange = {(e) => 
                                    dispatch({type:"SORT_BY_PRICE" ,payload :e.target.value })
                                }   
                                /> 
                    </div>           
                </div>

                <div className="category-section">
                    <div  style = {{margin:'2%'}}>
                        <h3> Category </h3>
                    </div>
                     {categoryData.map((item) => (
                        <CategoryData  item = {item} key = {item.title} />
                     ))}
                      
                </div>

                <div className="rating-section">
                    <div  style = {{margin:'2%'}}>
                          <h3> Rating </h3>
                    </div>
                    {ratingData.map((item) => (
                      <RatingData  item = {item}   key = {item.title} />
                    ))}
                </div>

                <div className="sorting-section">
                <div  style = {{margin:'2%'}}>
                         <h3> Sort by  </h3>
                    </div>
                     <div className="low-to-high">
                      <input  type = "radio" 
                      id = "low"
                      checked = {sortBy === "LOW_TO_HIGH"}
                      onChange={() => dispatch({type:"SORT_BY_LOW_OR_HIGH" , payload : "LOW_TO_HIGH"})}
                      />
                     <span> Price - Low to High  </span>
                    </div>
                     <div className="high-to-low">
                      <input  type = "radio" 
                       id = "high"
                       checked = {sortBy === "HIGH_TO_LOW"}
                       onChange={() => dispatch({type:"SORT_BY_LOW_OR_HIGH" , payload : "HIGH_TO_LOW"})}
                     />
                     <span> Price - High to Low  </span>
                  </div>
                </div>
        </div>
    </>
  )
}

export default ProductFilter