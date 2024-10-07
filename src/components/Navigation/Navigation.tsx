// import i18next from 'i18next'
// import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styles from 'src/components/Navigation/navigation.module.scss'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'src/hooks/redux'
import { burgerSlice } from 'src/store/reducers/BurgerSlice'

const setActiveClassName = ({ isActive }: { isActive: boolean }) => isActive ? `${styles.nav__activeLink} ${styles.nav__link}` : styles.nav__link

export const Navigation = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { changeBurgerStatus } = burgerSlice.actions

  const navHandler = () => {
    dispatch(changeBurgerStatus(false))
  }
  return (
    <div className={styles.nav__wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.nav__ul}>
          <li className={styles.nav__li} onClick={navHandler}>
            <NavLink to='/' className={setActiveClassName} >
              {t('components.leftSidebar.nav.about')}
            </NavLink>
          </li>
          <li className={styles.nav__li} onClick={navHandler}>
            <NavLink to='/projects' className={setActiveClassName} >
              {t('components.leftSidebar.nav.projects')}
            </NavLink>
        </li>
          <li className={styles.nav__li} onClick={navHandler}>
            <NavLink to='/contacts' className={setActiveClassName} >
              {t('components.leftSidebar.nav.contacts')}
            </NavLink>
          </li>
        </ul>      
      </nav>
      <LanguageSelector />
    </div>

  )
}
