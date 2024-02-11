import React from 'react'
import { BsGithub , BsLinkedin ,BsTwitter } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <div className="text-[18px] xl:text-3xl bg-slate-500 text-center text-black">
        <p>Made by Sarb</p>
          <div style = {{padding:'1%'}}>
            <div className = "grid grid-cols-3 p-2 justify-items-center" >

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