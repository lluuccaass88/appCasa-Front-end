import React, { createContext, useState, useEffect, useContext } from "react";

const ModalContext = createContext({})

let comandsArray = []

export function ArrayComandsProvider({ children }) {

    const [comands, setComands] = useState([]);    

    React.useEffect(() => { //Toda vez que o valor do comands mudar ele vai dar um push no array
        //NÃO ESTA SALVANDO DA FOMA CERTA NO ARRAY
        comandsArray.push(comands) 
        console.log("Conteudo do array -> " + comands.x)
      }, [comands])
    



    return (
      <ModalContext.Provider value={{ comands, setComands, comandsArray }}>
        {children}
      </ModalContext.Provider>
    );
  }
  
export default ModalContext;

export function useArray(){
    
    const context = useContext(ModalContext)

    return context
}
