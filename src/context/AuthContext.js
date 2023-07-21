import { createContext, useContext, useState } from "react";

const AuthContext =  createContext();

const AuthProvider = ({children}) => {

        const token = localStorage.getItem('token');
        const [auth,setAuth] = useState({
            token : token ?? "",
            isLoggedIn : !!token,
        })

     return (
        <AuthContext.Provider value = {{state,dispatch}}>
            {children}
        </AuthContext.Provider>
     )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider  ,useAuth }