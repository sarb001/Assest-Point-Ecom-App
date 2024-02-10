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
         <div className="home-container mt-[10%] mb-[15%] mx-[2%] " >
                <div className="text-section xs:mt-[25%] ">
                  <span className='text-[40px]'> 
                   Discover the best personal finance content through timeless books
                   by top authors </span>
                </div>

                <div className="btn">
                    <div className="btn-section p-1.5  w-[30%] bg-black" >
                       <Link to = "/products"> Get Started </Link>
                    </div>
                </div>

                <div className="my-12">

                    <div>
                        {featureImages.map((item) => (
                          <>
                           <div className = 'xs:my-8' key = {item.title}>
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

                            <div className="xs:p-2" >
                                  <span className='xs:flex w-full'> 
                                    <img src = {IMAGES.book1}  alt = "The Psychology of Money"  className='xs:w-full' /> 
                                  </span>
                            </div>
                          
                            <div className="xs:text-xl xs:mx-4">
                              <span> 
                                  <div> 
                                    The Psychology of Money Timeless lessons
                                     on wealth , greed etc - By Morgan Housel 
                                  </div>
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