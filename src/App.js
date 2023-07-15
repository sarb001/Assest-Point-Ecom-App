
import React from 'react';
import { ToastContainer } from 'react-toastify';
import MenuRoutes from './components/MenuRoutes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <ToastContainer  autoClose = {1000} />
        <MenuRoutes />
    </div>
  );
}

export default App;
