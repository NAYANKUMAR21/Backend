import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const state = useSelector(store=>store.authApp)
    
    console.log(state)
    if(state.data.isAuthenticated){
        return children
    }else{
        return <Navigate to="/login" replace={true}/>
    }
}

export default RequireAuth
