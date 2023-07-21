import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom' ;


 const RequireAuth = ({children}) => {
     const { auth }   =  useAuth();
     const navigate   =  useNavigate();

     useEffect(() => {
        if(!auth.isLoggedIn){
            navigate('/login');
        }
     },[auth.isLoggedIn , navigate])

     return auth.isLoggedIn ? children : null ;

}

export   { RequireAuth }