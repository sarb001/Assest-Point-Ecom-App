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
      <div style = {{fontSize:'24px',margin:'1%'}}> Logout out from here  </div> 
      <button  onClick = {handlelogout}  style =  {{padding:'0.5% 3%',margin:'1%'}}> 
         Logout 
       </button>
    </>
  )
}

export default Setting