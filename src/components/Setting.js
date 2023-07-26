import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Setting = () => {

    const navigate = useNavigate();
     const { setAuth } = useAuth();

    const handlelogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setAuth({ token : '' , isLoggedIn : false });
        toast.success(" Logged Out ");
        navigate('/login');
    }

  return (
    <>
      <h2> Setting  </h2>
      <button  onClick = {handlelogout}  style =  {{padding:'0.8% 3%'}}> 
         Logout 
       </button>
    </>
  )
}

export default Setting