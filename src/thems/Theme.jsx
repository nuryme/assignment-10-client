import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if(!theme) {
    localStorage.setItem('theme', 'dark-theme')
    return 'dark-theme'
  }
  return theme
}


export default function Theme({children}) {

  const [theme, setTheme] = useState(getTheme)

  const toggleTheme = () => {
    if('theme' === 'dark-theme') {
      setTheme('light-theme')
    }
    setTheme('dark-theme')
  }
  
  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme)
    }

    refreshTheme()
  }
  , [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
        {
          children
        }
    </ThemeContext.Provider>
  )
}
