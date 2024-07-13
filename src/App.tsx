import 'src/App.scss'
import { Toggle } from 'src/components/Toggle/Toggle'
import { themes, useTheme } from 'src/services/ThemeService'

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
