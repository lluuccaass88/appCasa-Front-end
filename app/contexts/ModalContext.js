import React, { createContext, useState, useEffect, useContext } from "react";

const ModalContext = createContext({})

export function ModalProvider({ children }){ 
     
const [visibleModal, setVisibleModal] = useState(false)

console.log("O valor do modal é: " + visibleModal)

        return(
            <ModalContext.Provider value={{setVisibleModal, visibleModal}}>
                {children}
            </ModalContext.Provider>
        ) 
}

export default ModalContext;

export function useModal(){
    const context = useContext(ModalContext)

    return context
}
