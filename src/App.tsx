import 'src/App.scss'
import { Toggle } from 'src/components/Toggle/Toggle'
import { themes, useTheme } from 'src/services/ThemeService'

export const App = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <h1>Porfolio</h1>
      <h2>Title h2</h2>
      <p>Porfolio text</p>
      <p className="small-text">Portfolio small text</p>
      <Toggle
        onChange={() => {
          if (theme === themes.light) { setTheme(themes.dark) }
          if (theme === themes.dark) { setTheme(themes.light) }
        }}
        value={theme === themes.dark}
      />
    </>

  )
}
