import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { ProductProvider } from './context/MainContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishListContext';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <CartProvider>
              <WishlistProvider>
                <ProductProvider>
                      <App />
                </ProductProvider>
            </WishlistProvider>
          </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

