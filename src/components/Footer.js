import React from 'react'
import { BsGithub , BsLinkedin ,BsTwitter } from 'react-icons/bs';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>Made by Sarb</p>
          <div style = {{padding:'1%'}}>
            <div className = "xs:grid xs:grid-cols-3 xs:p-2 justify-center" >

              <div>
                <a href="https://github.com/sarb001">
                  <BsGithub />
                </a>
              </div>

              <div>
              <a href="https://www.linkedin.com/in/linkedin">
                <BsLinkedin />
              </a>
              </div>

              <div>
              <a href="https://twitter.com/iamsarb">
                <BsTwitter />
              </a>
              </div>
            </div>
            <p className="copyright">© 2022 AssetPoint</p>
          </div>
      </div>
    </>
  )
}

export default Footer