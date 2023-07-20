import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { ProductProvider } from './context/MainContext';
import { CartProvider } from './context/CartContext';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <CartProvider>
          <ProductProvider>
                <App />
          </ProductProvider>
        </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

