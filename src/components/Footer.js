import React from 'react'
import { BsGithub , BsLinkedin ,BsTwitter } from 'react-icons/bs';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>Made by Sarb</p>
          <div style = {{padding:'2%'}}>
            <div className="footer-links" >
              <a href="https://github.com/sarb001">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/linkedin">
                <BsLinkedin />
              </a>
              <a href="https://twitter.com/iamsarb">
                <BsTwitter />
              </a>
            </div>
            <p className="copyright">© 2022 AssetPoint</p>
          </div>
      </div>
    </>
  )
}

export default Footer