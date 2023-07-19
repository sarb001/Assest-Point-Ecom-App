import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Products from './Products'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Home from './Home'
import PageNotFound from './PageNotFound'
import Order from './Order'
import Checkout from './Checkout'
import { Profile } from './Profile'
import SingleProduct from './SingleProduct'

const MenuRoutes = () => {
  return (
    <>
         <Routes >
            <Route path = '/'           element = {<Home  />}>  </Route>
            <Route path = '/login'      element = {<Login />}>  </Route>
            <Route path = '/signup'     element = {<Signup />}>  </Route>
            <Route path = '/products'  element   = {<Products />}>  </Route>
            <Route path = '/product/:productId'   element   = {<SingleProduct />}>  </Route>
            <Route path = '/profile'  element   = {<Profile  />}>  </Route>
            <Route path = '/cart'       element = {<Cart />}>  </Route>
            <Route path = '/wishlist'   element = {<Wishlist  />}>  </Route>
            <Route path = '/checkout'   element = {<Checkout  />}>  </Route>
            <Route path = '/order'   element = {<Order />}>  </Route>
            <Route path = '*'   element = {<PageNotFound  />}>  </Route>
         </Routes>
    </>
  )
}

export default MenuRoutes