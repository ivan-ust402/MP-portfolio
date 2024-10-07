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
  const {changeBurgerStatus} = burgerSlice.actions

  const navHandler = () => {
    dispatch(changeBurgerStatus(false))
  }
  return (
    <div className={styles.nav__wrapper}>
      <nav className={styles.nav}>
        <NavLink to='/' className={setActiveClassName} onClick={navHandler}>
          {t('components.leftSidebar.nav.about')}
        </NavLink>
        <NavLink to='/projects' className={setActiveClassName} onClick={navHandler}>
        {t('components.leftSidebar.nav.projects')}
        </NavLink>
        <NavLink to='/contacts' className={setActiveClassName} onClick={navHandler}>
        {t('components.leftSidebar.nav.contacts')}
        </NavLink>
      </nav>
      <LanguageSelector />
    </div>

  )
}
