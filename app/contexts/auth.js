import React, { createContext, useState, useContext } from "react";

import axios from 'axios';

const AuthContext = createContext({
    user: {}
})

//Parei no 48:26
//Ver como faz o alternativo pro await 16:45
//https://www.youtube.com/watch?v=KISMYYXSIX8

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
  }

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [signed, setsigned] = useState(true)


    async function signIn(data){

            //console.log("Realizando o login...")
            // const response = await axios.post('http://10.0.0.115:3333/auth/authenticate', data);
            // axios.post('http://10.0.0.115:3333/auth/authenticate', data).then((res) =>{
               
              
            // console.log("Antes do bug")
            // setUser(res.data)  
            // console.log("Depois do bug")
            //   return true  
            // }).catch((err)=>{
            //     console.log("Falha no login...")
            //     console.log(`Erro no login: ${err}`)
            //     return false    
            // })
            
        const res = await axios.post('http://10.0.0.115:3333/auth/authenticate', data)
            console.log("Antes do bug")
            setUser(res.data)  
            console.log("Depois do bug")

    }

    return (
        <AuthContext.Provider value={{ signIn, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext