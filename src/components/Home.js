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
         <div className="home-container mt-[10%] mb-[15%] mx-[2%] md:mt-[12%] xl:mt-[5%]" >
                <div className="text-section xs:mt-[25%] ">
                  <span className='text-[40px] md:text-[45px]'> 
                   Discover the best personal finance content through timeless books
                   by top authors </span>
                </div>

                <div className="btn md:mt-8 xl:mb-24">
                    <div className="btn-section p-1.5  w-[30%] bg-black text-center sm:p-4  md:w-[22%]" >
                       <Link to = "/products"> Get Started </Link>
                    </div>
                </div>

                <div className="my-12">
                    <div className='flex flex-wrap flex-col sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6  xl:gap-20'>
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

                  <div className="sm:text-center">
                            <span id = "book-text">   Book of the Week </span>

                      <div className="sm:grid sm:grid-cols-2 sm:gap-5" >

                            <div className="flex justify-center p-2" >
                                  <span className='w-[60%] h-[50%] overflow-hidden sm:w-[60%] sm:h-[100%] xl:w-[40%]'> 
                                    <img src = {IMAGES.book1}  alt = "The Psychology of Money" 
                                     className='w-full h-full object-cover' /> 
                                  </span>
                            </div>
                          
                            <div className="text-xl mx-4 sm:flex sm:items-center">
                              <span> 
                                  <div className='lg:text-[30px] '> 
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