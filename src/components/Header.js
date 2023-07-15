import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';


const Header = () => {
  return (
    <>
            <header>
                <div className = "header-container">
                     <div className="header-first-section">
                        <span id = "link-one" > <Link to = "/"> Assest Point  </Link> </span>
                     </div>
                     <div className="header-second-section">
                        <span id = "link-one"> <Link to = ""> Shop  </Link> </span>
                        <span id = "link-one"> <Link to = "/profile"> Profile  </Link> </span>
                        <span id = "link-one"> <Link to = "/wishlist"> Wishlist  </Link> </span>
                        <span id = "link-one"> <Link to = "/cart"> Cart  </Link> </span>
                     </div>
                </div>
            </header>
    </>
  )
}

export default Header