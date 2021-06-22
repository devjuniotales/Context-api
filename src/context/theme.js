import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();


export const themes =[
    {
        name : 'dark',
        colors : {
            background : 'black',
            text : 'white'
        }
    },
    {
        name : 'white',
        colors : {
            background : 'white',
            text : 'black'
        }   
    }
]
export default function ThemeProvider ({children}){
    const [theme ,setTheme] = useState(themes[0])

    return(
        <ThemeContext.Provider 
        value ={{ setTheme , theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export function useTheme() {
    const context = useContext(ThemeContext);
    const {setTheme , theme} = context;
    return { theme, setTheme} 
}