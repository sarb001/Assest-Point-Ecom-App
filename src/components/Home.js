import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import IMAGES from '../images/images';
import '../styles/Home.css';

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
         <div className="home-container my-[15%] mx-[2%] " >
                <div className="text-section">
                  <span className='text-[46px]'> 
                   Discover the best personal finance content through timeless books
                   by top authors </span>
                </div>

                <div className="btn">
                    <div className="btn-section w-[15%] p-[1%]  bg-black" >
                       <Link to = "/products"> Get Started </Link>
                    </div>
                </div>

                <div className="my-12">

                    <div className = "" >
                        {featureImages.map((item) => (
                          <>
                           <div key = {item.title}>
                            <div className='text-3xl'> {item.title} </div>

                            <div>
                              <Link to = '/products' >
                                  <div className='w-[100%] h-[100%] overflow-hidden'>
                                    <img  className='w-full h-full object-cover' 
                                    src = {item.imgLink}  alt =  {item.title}  />
                                  </div>
                              </Link>
                            </div>
                          </div>
                          </>
                        ))}
                    </div>

                </div>

                  <div className="book-week-section">
                            <span id = "book-text">   Book of the Week </span>
                      <div className="books-partition" >

                          <div className="mainbook-section" >
                                <span> 
                                  <img src = {IMAGES.book1}  alt = "The Psychology of Money" style = {{width:'45%'}} /> 
                                </span>
                          </div>
                          
                          <div className="text-section">
                            <span> 
                                <h2> The Psychology of Money Timeless lessons on wealth , greed etc  </h2>
                                <h4>By Morgan Housel </h4>
                                {/* <button class = 'btn btn-primary mg-sm'> Read More </button> */}
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