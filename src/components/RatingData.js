import React from 'react'
import { useProduct } from '../context/MainContext';

const RatingData = ({item}) => {

    const {label,title,star} = item;
    const { state , dispatch} = useProduct();

  return (
    <>
     <div className = "categorydata-container">

          <input 
              type = "radio"  
              id  = {title}
              checked = {state.rating === star}
              onChange = {() => dispatch({type:"RATING",payload : star})}
              className='rating-data'
           />
           <span> {label} </span>
           </div>
    </>
  )
}

export default RatingData