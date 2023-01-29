import React, {useContext} from "react";
import {useAuth} from "../contexts/auth";

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function Routes() {
    const { signed } = useAuth()

    if(signed){
        return(<AppRoutes />)
    }else{
        return(<AuthRoutes />)
    }
}

 export default Routes;