import React from 'react'

const CategoryData = ({item}) => {

    const {label} = item;

  return (
    <>
      <div className="categorydata-container">
          <input  type = "checkbox"  
           
          />
          <span> {label} </span>
          
      </div>
    </>
    )
}

export default CategoryData