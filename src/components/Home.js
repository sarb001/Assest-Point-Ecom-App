import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header />
         <div className="home-container">
                <div className="text-section">
                  <h1> Discover the best personal finance content through timeless books
              by top authors </h1>
                </div>
                <div className="btn">
                    <div className="btn-section" style = {{backgroundColor:'red',padding:'1%',width:'10%'}}>
                       <Link to = "/products"> Get Started </Link>
                    </div>
                </div>
          </div> 
        <Footer />
    </>
  )
}

export default Home