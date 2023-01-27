import React, {useContext} from "react";

import {useAuth} from "../contexts/auth"

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function Routes() {
    const { signIn, user } = useAuth();
    console.log("Chegou no index")
    console.log(user)

    // console.log("Chegou no index")

    // const {signed} = useContext(AuthContext)

    // console.log(signed)

    if(user == null){
        console.log("user = null")
        return(<AuthRoutes />)
    }else{
        console.log("user != null")
        return(<AppRoutes />)
    }
  }
  
  export default Routes;