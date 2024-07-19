import React, { useCallback, useState } from 'react'
import styles from './languageSelector.module.scss'
import i18next from 'i18next'

export default function LanguageSelector() {
  const [active, setActive] = useState(false)
  const [language, setLanguage] = useState(i18next.language)

  const openMenuHandler = useCallback(() => {
    setActive(true)
  }, [])
  const closeMenuHandler = useCallback(() => {
    setActive(false)
    console.log('1')
  }, [])

  const onChangeLanguage = useCallback((item) => {
    i18next.changeLanguage(item)
    setLanguage(item)
    setActive(false)
  }, [])

  return (
    <>
      <div className={styles.selector}>
        <button className={`${styles.selector__button} text ${!active ? '' : styles.selector__button_active}`} onClick={openMenuHandler}>
          {language}
        </button>
        <ul className={active ? `${styles.selector__dropMenu} ${styles.selector__dropMenu_active}` : styles.selector__dropMenu}>
          {i18next.languages.map((item, index) => {
            return <li onClick={() => onChangeLanguage(item)} key={index}>{item}</li>
          })}
        </ul>
      </div>
      <div className={`${styles.selector__wrapper} ${ active ? styles.selector__wrapper_active : ''}`} onClick={() => closeMenuHandler()}></div>
    </>

  )
}
