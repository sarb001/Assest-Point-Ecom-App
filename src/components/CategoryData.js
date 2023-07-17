import React from 'react'
import { useProduct } from '../context/MainContext';

const CategoryData = ({item}) => {

    const {label ,isChecked , title , actionType} = item;
    const {dispatch} = useProduct();

  return (
    <>
      <div className="categorydata-container">
          <input  type = "checkbox"  
                  className = 'category-checkbox'
                  id = {title}
                  checked = {isChecked}
                  onChange={() => dispatch({type:actionType})}
          />
          <span> {label} </span>
          
      </div>
    </>
    )
}

export default CategoryData