import React, { createContext, useContext, useState } from "react"
import { ThemeProvider } from "styled-components"

export const lightTheme = {
    background: "whitesmoke",
    text: '#000',
}

export const darkTheme = {
    background: '#0a192f',
    text: '#1e1e1e',
}

const ThemeToggleContext = createContext()

export const useTheme = () => useContext(ThemeToggleContext)

export const ThemeToggleProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleTheme = () => setIsDarkMode((prev) => !prev)

    const theme = isDarkMode
        ? {...darkTheme, isDark: true}
        : {...lightTheme, isDark: false}
    
    return (
        <ThemeToggleContext.Provider value={{toggleTheme, isDarkMode}}>
            <ThemeProvider theme={ theme }>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
}

export default ThemeToggleProvider