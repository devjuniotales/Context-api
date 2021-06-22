import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/Api'

const AuthContext = createContext({signed : false , user : {}});

export default function AuthProvidoer ({children}) {
    const [user,setUser] = useState(null)

        useEffect(() => {
            async function loadStorageData() {
                const storageUser = await localStorage.getItem('user');
                const storageToken = await localStorage.getItem('token');
    
                if (storageUser && storageToken) {
                    api.defaults.headers.auth =  `Bearer ${storageToken}`
                    setUser(storageUser)
                } else if (!storageUser && !storageToken) {
                    signOut()
                }
            }
            loadStorageData();
        }, [])

    function signOut() {
       localStorage.clear(setUser(null))
    }

    async function singIn(email, password) {
        try {
            const response =  await api.post('auth',{
                email : email , 
                password : password
            })
            setUser(response.data)
            api.defaults.headers['auth'] = `Bearer ${response.data.token}`
            
            await localStorage.setItem('user', JSON.stringify(response.data));
            await localStorage.setItem('token', response.data.token);
        } catch (error) {
            window.alert('Usuário ou senha Inválido! Ou não Admin')
        }
    }

    return (
        <AuthContext.Provider value ={{
            signed : !! user,
            singIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    const {singIn, signed , signOut} = context;
    return {signed, singIn, signOut}
}