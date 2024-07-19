import { useState } from 'react'
import styles from './leftSidebar.module.scss'
import { Navigation, Toggle } from 'src/components'
import { themes, useTheme } from 'src/services/ThemeService'
import { useTranslation } from 'react-i18next'


export const LeftSidebar = () => {
  const { theme, setTheme } = useTheme()
  const [successCopyText, setSuccessCopyText] = useState('')
  const [errorCopyText, setErrorCopyText] = useState('')
  const { t } = useTranslation()

  const copyTextToClipboard = async (text: string) => {
    try {
      setErrorCopyText('')
      await navigator.clipboard.writeText(text)
      setSuccessCopyText(t('components.leftSidebar.message.success'))
    
      await new Promise((res) => setTimeout(res, 1500))
      setSuccessCopyText('')
    } catch (error) {
      setErrorCopyText(t('components.leftSidebar.message.error'))
      await new Promise((res) => setTimeout(res, 1500))
      setErrorCopyText('')
    }
  }

  return (
    <div className={styles.leftSidebar__wrapper}>
      <div className={styles.leftSidebar}>
        <Navigation />
        <Toggle
          onChange={() => {
            if (theme === themes.light) { setTheme(themes.dark) }
            if (theme === themes.dark) { setTheme(themes.light) }
          }}
          value={theme === themes.dark}
        />
        <div className={styles.leftSidebar__downControlsBlock}>
          <div className={styles.leftSidebar__tabs}>
            <a className={styles.leftSidebar__link} href='https://t.me/IvanUst_nsk'>[{ t('components.leftSidebar.tabs.telegram') }]</a>
            <a className={styles.leftSidebar__link} onClick={() => copyTextToClipboard('Vangold915@gmail.com')}>[{ t('components.leftSidebar.tabs.email') }]</a>
            <div className={styles.leftSidebar__message}>
              {
                errorCopyText && <p className={styles.leftSidebar__error}>{errorCopyText}</p>}
              {
                successCopyText && <p className={styles.leftSidebar__success}>{successCopyText}</p>
              }
            </div>
          </div>
          <div className={styles.leftSidebar__designerSignature}>
            <p className='small-text'>[{ t('components.leftSidebar.signature') }]</p>
          </div>
        </div>
      </div>
    </div>

  )
}
