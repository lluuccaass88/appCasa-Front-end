import React, { createContext, useState } from "react";
import axios from 'axios';

const AuthContext = createContext({})

export default AuthContext;

export function AuthProvider({ children }){ 
    const [user, setUser] = useState(null)
    
    async function signIn(data){
        //const response = await axios.post('http://10.0.0.115:3333/auth/authenticate', data);
        
        axios.post('http://10.0.0.115:3333/auth/authenticate', data).then((res) =>{      
            setUser(response.data)
            return true  
        }).catch((err)=>{
            console.log("Falha no login...")
            console.log(`Erro no login: ${err}`)
            return false    
        })

    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

// import React, { createContext, useState, useContext } from "react";

// import axios from 'axios';

// const [user, setUser] = useState(null)
// const [signed, setsigned] = useState(false)


// const AuthContext = createContext({
//     signed, 
//     user
// })

//Parei no 48:26
//Ver como faz o alternativo pro await 16:45
//https://www.youtube.com/watch?v=KISMYYXSIX8

// export function useAuth() {
//     const context = useContext(AuthContext);
//     return context;
//   }

// export function AuthProvider({ children }) {



//     async function signIn(data){

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
            
//         const res = await axios.post('http://10.0.0.115:3333/auth/authenticate', data)
//             console.log("Antes do bug")
//             setUser(res.data)  
//             console.log("Depois do bug")

//     }

//     return (
//         <AuthContext.Provider value={{useAuth}}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthContext