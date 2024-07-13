import './App.scss'
import { Toggle } from './components/Toggle/Toggle'
import { themes, useTheme } from './services/ThemeService'

export const App = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Toggle
      onChange={() => {
        if (theme === themes.light) { setTheme(themes.dark) }
        if (theme === themes.dark) { setTheme(themes.light) }
      }}
      value={theme === themes.dark}
    />
  )
}
