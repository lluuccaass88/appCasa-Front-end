import React, { createContext, useState, useEffect, useContext } from "react";

const MenuContext = createContext({})

export function MenuProvider({ children }){  
const [visibleModal, setVisibleModal] = useState(false)

        return(
            <MenuContext.Provider value={{setVisibleModal, visibleModal}}>
                {children}
            </MenuContext.Provider>
        ) 
}

export default MenuContext;

export function useMenu(){
    const context = useContext(MenuContext)

    return context
}
