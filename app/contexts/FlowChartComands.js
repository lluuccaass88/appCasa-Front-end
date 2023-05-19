import React, { createContext, useState, useEffect, useContext } from "react";

const ModalContext = createContext({})

export function FlowChartComandsProvider({ children }){ 
     
const [visibleModal, setVisibleModal] = useState(false)
const [conditionalId, setConditionalId] = useState();

console.log("O valor do modal é: " + visibleModal)

        return(
            <ModalContext.Provider value={{setVisibleModal, visibleModal,setConditionalId, conditionalId}}>
                {children}
            </ModalContext.Provider>
        ) 
}

export default ModalContext;

export function useModal(){
    const context = useContext(ModalContext)

    return context
}
