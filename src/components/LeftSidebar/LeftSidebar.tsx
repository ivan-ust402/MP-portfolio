import styles from './leftSidebar.module.scss'
import { Navigation, Toggle } from 'src/components'
import { themes, useTheme } from 'src/services/ThemeService'

export const LeftSidebar = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={styles.leftSidebar}>
      <Navigation />
      <Toggle
        onChange={() => {
          if (theme === themes.light) { setTheme(themes.dark) }
          if (theme === themes.dark) { setTheme(themes.light) }
        }}
        value={theme === themes.dark}
      />
    </div>
  )
}
