
import styles from './leftSidebar.module.scss'
import { ContactsButtons, Navigation, Toggle } from 'src/components'
import { themes, useTheme } from 'src/services/ThemeService'
import { useTranslation } from 'react-i18next'
import { useAppDispatch} from 'src/hooks/redux'
import { burgerSlice } from 'src/store/reducers/BurgerSlice'

export const LeftSidebar = () => {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {changeBurgerStatus} = burgerSlice.actions

  return (
    <div className={styles.leftSidebar__wrapper}>
      <div className={styles.leftSidebar}>
        <Navigation />
        <div className={styles.leftSidebar__toggle}>
          <Toggle
            onChange={() => {
              if (theme === themes.light) { setTheme(themes.dark) }
              if (theme === themes.dark) { setTheme(themes.light) }
              dispatch(changeBurgerStatus(false))
            }}
            value={theme === themes.dark}
          />
        </div>
        <div className={styles.leftSidebar__downControlsBlock}>
          <ContactsButtons parentKey={'leftSidebar'} />
          <div className={styles.leftSidebar__designerSignature}>
            <p className='small-text'>[{t('components.leftSidebar.signature')}]</p>
          </div>
        </div>
      </div>
    </div>

  )
}
