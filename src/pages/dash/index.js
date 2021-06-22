import React from 'react';
import {useAuth} from '../../context/Auth'
import { themes, useTheme } from '../../context/theme';


import './index.css'

export default function Home () {
    const {signOut}  = useAuth()
    const {theme,setTheme} = useTheme();

    function toggleTheme() {
        setTheme(theme.name === 'dark' ? themes[1] : themes[0])
    }
    return (
           <div 
           style ={{
                background : theme.colors.background,
                color : theme.colors.text
            }}
            className ='container-dash'>
                <div className ='content-dash'>
                    <h1>DASHBOARD</h1>
                    <div className ='dash-button'>
                        <button type ='button' onClick = {() => signOut()}>SAIR</button>
                        <button type ='button' onClick = {() => toggleTheme()}> MUDAR TEMA </button>
                    </div>
                </div>
           </div>
         
    )
}