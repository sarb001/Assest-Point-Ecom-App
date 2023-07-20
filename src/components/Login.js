import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/common.css';
import { Link } from 'react-router-dom';

const Login = () => {

   const handleLogin = () => {}
   const handleEmail = () => {}
   const handlePassword = () => {}
   const handleTestLogin = () => {}

   const [loginData,setloginData] = useState({
       email : "",
       password : ""
   })

  return (
    <>
    <Header />

      <section className="app-ctn">
        <form className="br-md" onSubmit={handleLogin}>
          <h2 className="text-center mg-bottom-md">Login</h2>
          {/* {loginData.error && (
            <p className="error-msg form-control">Invalid credentials</p>
          )} */}
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              required
              value={loginData.email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              required
              value={loginData.password}
              onChange={(e) => handlePassword(e)}
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            />
         
          </div>
          <div className="form-control">
            <input type="checkbox" id="remember-me" name="checkbox" />
            <label htmlFor="remember-me" className="fw-bold">
              Remember me{" "}
            </label>
            <Link to="/forgotpassword" className="forgot-pw fw-bold">
              Forgot your Password?
            </Link>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control">
            <button
              className="btn btn-primary-outline"
              onClick={(e) => handleTestLogin(e)}
            >
              Fill test credentials
            </button>
          </div>
          <div className="account-toggle fw-bold">
            <Link to="/signup">
              Create New Account{" "}
            </Link>
          </div>
        </form>
      </section>

    <Footer />
    </>
  )
}

export default Login