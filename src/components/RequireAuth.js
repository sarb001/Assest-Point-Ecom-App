import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { useNavigate } from 'react-router-dom' ;

const RequireAuth = ({children}) => {

     const { auth }   =  useAuth();
     const navigate =  useNavigate();

    return  auth.isLoggedIn ? (
        children
    ) :(
            navigate('/login')
    )
}

export { RequireAuth }