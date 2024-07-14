import React, { createContext, useContext, useEffect, useState } from 'react'

interface Theme {
  setTheme: (value: string) => void
  theme: string
}

export const themes = {
  dark: 'dark',
  light: 'light'
}

export const ThemeContext = createContext<Theme>({
  theme: 'light',
  setTheme: () => null
})

export const useTheme = () => useContext(ThemeContext)

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (Object.values(themes).includes(theme)) {
    return theme
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  

  if (userMedia.matches) {
    return themes.light
  }

  return themes.dark
}

interface Props {
  children: JSX.Element
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(getTheme)
  console.log(theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
