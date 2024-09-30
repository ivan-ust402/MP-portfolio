import React, { useCallback, useState, useEffect, useRef } from 'react'
import styles from './languageSelector.module.scss'
import i18next from 'i18next'

export default function LanguageSelector() {
  let breakpoint = 1023
  const [active, setActive] = useState(false)
  const [language, setLanguage] = useState(i18next.language)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint)
  const isDesktopRef = useRef(null)
  isDesktopRef.value = isDesktop
  console.log('isDesktop', isDesktop)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = useCallback((event) => {
    const size = event.target.innerWidth
    if (size > breakpoint) {
      if (!isDesktopRef.value) {
        setIsDesktop(true)
        isDesktopRef.value = true
      }
    } else {
      if (isDesktopRef.value) {
        setIsDesktop(false)
        isDesktopRef.value = false
      }
    }
  }, [isDesktop])

  const openMenuHandler = useCallback(() => {
    setActive(true)
  }, [])
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
        <button className={`${styles.selector__button} text ${!active ? '' : styles.selector__button_active}`} onClick={openMenuHandler}>
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
