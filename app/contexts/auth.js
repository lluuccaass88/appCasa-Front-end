import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../components/loading'
import Api from '../services/util/api'
// import LoginScreen from '../pages/loginScreen'

const AuthContext = createContext({})

export default AuthContext;

export function AuthProvider({ children }){ 
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

            if(storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser))
                setLoading(false)
                Api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`
            }else{
                setLoading(false)
            }
        }
        loadStoragedData()
    }, [])
    
    async function signIn(data){
        axios.post('http://10.0.0.115:3333/auth/authenticate', data).then( async (res) =>{      
            setUser(res.data.user)
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.data.user))
            await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(res.data.token))
            //Api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`
            return true
        }).catch((err)=>{
            console.log("Falha no login...")
            console.log(`Erro no login: ${err}`)  
            console.log(JSON.stringify(err))
            return false
        })
    }

    async function register(data){
        axios.post('http://10.0.0.115:3333/auth/register', data).then( async(res) =>{
            console.log(`A resposta do servidor é: ${res.data}`);
        }).catch((err)=>{
            alert('Erro ao cadastrar, tente novamente.'+ err);
        })
    }

    function SignOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })
        setUser(null)
    }

    if(loading){
        return(<Loading />) 
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, SignOut, register}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext)

    return context
}
