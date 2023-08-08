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
import UserProfile, { Profile } from './UserProfile'
import SingleProduct from './SingleProduct'
import   { RequireAuth }  from '../components/RequireAuth';

const MenuRoutes = () => {
  return (
    <>
         <Routes >
            <Route path = '/'           element = {<Home  />}>  </Route>
            <Route path = '/login'      element = {<Login />}>  </Route>
            <Route path = '/signup'     element = {<Signup />}>  </Route>
            <Route path = '/products'  element   = {<Products />}>  </Route>
            <Route path = '/product/:productId'   element   = {<SingleProduct />}>  </Route>
            
            <Route path = '/profile'  element   = { 
              <RequireAuth>
                <UserProfile  />
              </RequireAuth>
            }> 
            </Route>
            
            <Route path = '/cart'       element = {
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }>  
            </Route>

            <Route path = '/wishlist'   element = {
              <RequireAuth>
                <Wishlist  />
              </RequireAuth>
            }>  
            </Route>

            <Route path = '/order'   element = {<Order />}>  </Route>
            <Route path = '*'   element = {<PageNotFound  />}>  </Route>
         </Routes>
    </>
  )
}

export default MenuRoutes