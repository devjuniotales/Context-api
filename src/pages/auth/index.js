import React, {useState } from 'react'
import { useAuth } from '../../context/Auth';
import './index.css'

export default function Auth ({history}) {
    const { singIn} = useAuth();
    const [ email, setEmail] = useState()
    const [ password, setPassword] = useState()

   
    function toggleSubmit() {
        singIn(email,password)
    }
    function toggleNavigation() {
        history.push('/register')
    }

    return (
                    <div className ='container'>
                        <form >
                            <div  className ='content'>
                                <div className ='title'>
                                    <label htmlFor="">LOGIN</label>
                                </div>
                                <div className ='input'>
                                    <input type="text" value ={email} placeholder ='email' onChange ={event => setEmail(event.target.value)}/>
                                    <input type ="text"  value ={password} placeholder ='senha' onChange ={event => setPassword(event.target.value)} />
                                </div>
                                <div className ='button'>
                                    <button type ='button' onClick ={() => toggleSubmit()}> Logar </button>
                                    <button type ='button' onClick ={() => toggleNavigation()}> CADASTRAR </button>
                                </div>
                            </div>
                        </form>
                    
                    </div>
         
    )
}