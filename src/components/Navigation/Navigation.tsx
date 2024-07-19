// import i18next from 'i18next'
// import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styles from 'src/components/Navigation/navigation.module.scss'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

const setActiveClassName = ({ isActive }: { isActive: boolean }) => isActive ? `${styles.nav__activeLink} ${styles.nav__link}` : styles.nav__link

export const Navigation = () => {
  // const onChangeLanguage = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
  //   i18next.changeLanguage(event.currentTarget.value)
  // }, [])

  return (
    <div className={styles.nav__wrapper}>
      <nav className={styles.nav}>
        <NavLink to='/' className={setActiveClassName}>
          About
        </NavLink>
        <NavLink to='/projects' className={setActiveClassName}>
          Projects
        </NavLink>
        <NavLink to='/contacts' className={setActiveClassName}>
          Contacts
        </NavLink>
      </nav>
      <LanguageSelector />
    </div>

  )
}
