import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { ProductProvider } from './context/MainContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <CartProvider>
            <ProductProvider>
                  <App />
            </ProductProvider>
          </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

