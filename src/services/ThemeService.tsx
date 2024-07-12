import React, { createContext, useEffect, useState } from "react"

const themes = {
  dark: 'dark',
  light: 'light',
}

const ThemeContext = createContext({})


const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (Object.values(themes).includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')

  if (userMedia.matches) return themes.light

  return themes.dark
}

interface Props {
  children: JSX.Element
} 


export const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [ theme ])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}