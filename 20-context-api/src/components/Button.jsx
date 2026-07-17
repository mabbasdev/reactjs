import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)
    
    const changeTheme = () => {
        console.log("Theme Changed");
        setTheme("Dark")
    }
    return (
        <div>
            <button onClick={changeTheme}>Change Theme { theme }</button>
        </div>
    )
}

export default Button
