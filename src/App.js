
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MenuRoutes from './components/MenuRoutes';
import './styles/common.css';

function App() {
  return (
    <div className="App">
        <ToastContainer  autoClose = {1000} />
        <MenuRoutes />
    </div>
  );
}

export default App;
