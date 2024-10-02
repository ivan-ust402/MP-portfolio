import React, { useCallback, useState } from 'react'
import styles from './languageSelector.module.scss'
import i18next from 'i18next'
// import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { useAppSelector } from 'src/hooks/redux'
// import { burgerSlice } from 'src/store/reducers/BurgerSlice'

export default function LanguageSelector() {
  const [active, setActive] = useState(false)
  const [language, setLanguage] = useState(i18next.language)
  const { desktop } = useAppSelector((state) => state.resolution)
  // const { burgerMenuStatus } = useAppSelector((state) => state.burgerMenuStatus)
  // const dispatch = useAppDispatch()
  // const {changeBurgerStatus} = burgerSlice.actions


  const openMenuHandler = useCallback(() => {
    
    if (desktop) {
      setActive(true)
    } else {{
        onChangeLanguage(language === 'ru' ? 'en' : 'ru')
        // dispatch(changeBurgerStatus(false))
      }
    }
      
  }, [desktop, language])
  const closeMenuHandler = useCallback(() => {
    setActive(false)
  }, [])

  const onChangeLanguage = useCallback((item) => {
    i18next.changeLanguage(item)
    setLanguage(item)
    setActive(false)
  }, [])
 

  return (
    <>
      <div className={styles.selector}>
        <button className={`${styles.selector__button} ${!active ? '' : styles.selector__button_active}`} onClick={openMenuHandler}>
          {language}
        </button>
        <ul className={active ? `${styles.selector__dropMenu} ${styles.selector__dropMenu_active}` : styles.selector__dropMenu}>
          {i18next.languages.map((item, index) => {
            return <li onClick={() => onChangeLanguage(item)} key={index}>{item}</li>
          })}
        </ul>
      </div>
      {active && <div className={`${styles.selector__wrapper} ${ active ? styles.selector__wrapper_active : ''}`} onClick={() => closeMenuHandler()}></div>}
    </>

  )
}
