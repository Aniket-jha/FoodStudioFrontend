import React,{Fragment} from 'react'
import {Route,Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
const ProtectedRoute = ({component:Component,...rest}) => {
    
    const {loading, isAuthenticated, user} = useSelector((state)=>state.user)

  return (

    
        <Route
            
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            }

           

            return <Component {...props} />;
          }}
        />
    
  )
}

export default ProtectedRoute