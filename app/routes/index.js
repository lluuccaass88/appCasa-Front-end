import React, { useContext } from "react";
import { useAuth } from "../contexts/Auth";
import { MenuProvider } from "../contexts/Menu";

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function Routes() {
    const { signed } = useAuth()

    if (signed) {
        return (
            <MenuProvider >
                <AppRoutes />
            </MenuProvider>
        )
    } else {
        return (<AuthRoutes />)
    }
}

export default Routes;