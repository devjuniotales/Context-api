import React, { useState } from 'react';
import api from '../../services/Api'

import './index.css'

export default function Register ({history}) {

   async function createUser() {
        try {
        await api.post('user',{
                email : email,
                password : password
            })
            window.alert('Usúario cadastrado com sucesso!')
            history.goBack()
        } catch (error) {
            window.alert('Error')
        }
    }

    const [ email, setEmail] = useState()
    const [ password, setPassword] = useState()
  
    return (
        <div className ='container'>
        <form >
            <div  className ='content'>
                <div className ='title'>
                    <label htmlFor="">CADASTRAR USÚARIO</label>
                </div>
                <div className ='input'>
                    <input type="text" value ={email} placeholder ='enail' onChange ={event => setEmail(event.target.value)}/>
                    <input type ="text"  value ={password} placeholder ='senha' onChange ={event => setPassword(event.target.value)} />
                </div>
                <div className ='button'>
                    <button type ='button' onClick ={() => createUser()}> CADASTRAR </button>
                </div>
            </div>
        </form>
    
    </div>
    )
}