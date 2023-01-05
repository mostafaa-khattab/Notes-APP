import React from 'react'
import Login from './Login'
import Home from './Home';
// import { useNavigate } from 'react-router-dom';



function ProtectedRoute({saveUserData}) {
  
    // let navigate = useNavigate()

    if(localStorage.getItem("token") != null){
        return <Home/>
    }else{
        return <Login/> 
    }
}

export default ProtectedRoute
