import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import IMAGES from '../images/images';

 const featureImages = [
  {
     imgLink : IMAGES.selfHelp,
     title : "selfHelp"
  },
  {
     imgLink : IMAGES.stock,
     title : "stock"
  },
  {
     imgLink : IMAGES.realEstate,
     title : "realEstate"
  },
 ]

const Home = () => {
  return (
    <>
        <Header />
         <div className="home-container" >

                <div className="text-section">
                  <h1> Discover the best personal finance content through timeless books
                   by top authors </h1>
                </div>

                <div className="btn">
                    <div className="btn-section" >
                       <Link to = "/products"> Get Started </Link>
                    </div>
                </div>

                <div className="selected-books">

                    <div className="books-section" >
                        {featureImages.map((item) => (
                       <Link to = '/products' key = {item.title}>
                          <h2> {item.title} </h2>
                          <img  src = {item.imgLink}  alt =  {item.title} 
                          style = {{width:'85%'}} />
                       </Link>
                        ))}
                    </div>

                </div>

                  <div className="book-week-section">
                            <h2>   Book of the Week </h2>
                      <div className="books-partition" >

                          <div className="mainbook-section" >
                                <span> 
                                  <img src = {IMAGES.book1}  alt = "The Psychology of Money" style = {{width:'45%'}} /> 
                                </span>
                          </div>
                          
                          <div className="text-section">
                            <span> 
                                <h2> The Psychology of Money Timeless lessons on wealth , greed etc  </h2>
                                <p>By Morgan Housel </p>
                                <button class = 'btn btn-primary mg-sm'> Read More </button>
                            </span>

                          </div>

                      </div>
                  </div>
                  
          </div> 
        <Footer />
    </>
  )
}

export default Home