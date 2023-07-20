import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import '../styles/common.css';

const Signup = () => {

   const [signUpData,setSignUpData] = useState({
      firstName :"",
      lastName :"",
      email :"",
      password : "",
      confirmPassword : "",
   });

   const handleSignUp = () => {}
   const handleSignUpData = () => {}

   const handleTestSignup = () => {}

  return (
    <>
     <Header />

     <section className="app-ctn">
        <form className="br-md" onSubmit={handleSignUp}>
          <h2 className="text-center mg-bottom-md">Signup</h2>
          <div className="form-control">
            <label htmlFor="first-name" className="fw-bold">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="first name"
              required
              value={signUpData.firstName}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="last-name" className="fw-bold">
              Last name
            </label>
            <input  type="text"  id="last-name"
              name="lastName" placeholder="last name" required
              value={signUpData.lastName}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              required
              value={signUpData.email}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
              required
              value={signUpData.password}
              onChange={(e) => handleSignUpData(e)}
            />
          
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password" className="fw-bold">
              Confirm password
            </label>
            <input
              type="text"
              id="confirm-password"
              name="confirmPassword"
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
              required
              value={signUpData.confirmPassword}
              onChange={(e) => handleSignUpData(e)}
            />
          </div>
          <div className="form-control">
            <input type="checkbox" id="terms-condition" name="checkbox" />
            <label htmlFor="terms-condition" className="fw-bold">
              I accept all Terms & Conditions
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Create New Account</button>
          </div>
          <div className="form-control">
            <button
              type="button"
              className="btn btn-primary-outline"
              onClick={handleTestSignup}
            >
              Fill test credentials
            </button>
          </div>
          <div className="account-toggle fw-bold">
            <Link to="/login">
              Already have an account{" "}
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Signup