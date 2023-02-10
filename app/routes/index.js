import React, {useContext} from "react";
import {useAuth} from "../contexts/auth";
import { MenuProvider } from "../contexts/menu";

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function Routes() {
    const { signed } = useAuth()

    if(signed){
        return(
          
    

                // <MenuProvider >
                <AppRoutes />
            // </MenuProvider>
     
            
        )
    }else{
        return(<AuthRoutes />)
    }
}

 export default Routes;