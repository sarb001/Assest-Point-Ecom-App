import React from 'react'

const Footer = () => {
  return (
    <>
     <footer>
        <p>Made by Sarb</p>
        <div className="footer-links">
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
      </footer>
    </>
  )
}

export default Footer