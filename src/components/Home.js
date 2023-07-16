import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import IMAGES from '../images/images';

console.log('images are -',IMAGES);

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
         <div className="home-container" style = {{margin:'5%'}}>

                <div className="text-section">
                  <h1> Discover the best personal finance content through timeless books
              by top authors </h1>
                </div>

                <div className="btn">
                    <div className="btn-section" style = {{backgroundColor:'red',padding:'1%',width:'10%'}}>
                       <Link to = "/products"> Get Started </Link>
                    </div>
                </div>

                <div className="selected-books">
                    <div className="books-section" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',textAlign:'center'}}>
                        {featureImages.map((item) => (
                       <Link to = '/products'>
                         <h2> {item.title} </h2>
                        <img key = {item.title} src = {item.imgLink}  alt =  {item.title} style = {{width:'85%'}} />
                       </Link>
                        ))}
                    </div>
                </div>

                  <div className="book-week-section">
                      <div className="text-section">Book of the Week</div>
                       <div className="mainbook-section">
                          <span> <img src = '../images/book-1.jpg'  alt = "The Psychology of Money" /> </span>
                          <span> 
                           <h2> The Psychology of Money Timeless lessons on wealth , greed etc  </h2>
                           <p>By Morgan Housel </p>
                           <button> Read More </button>
                          </span>
                       </div>
                  </div>

          </div> 
        <Footer />
    </>
  )
}

export default Home