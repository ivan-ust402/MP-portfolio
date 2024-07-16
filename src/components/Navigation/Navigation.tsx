import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from 'src/components/Navigation/navigation.module.scss'

const setActiveClassName = ({isActive}: {isActive: boolean}) => isActive ? `${styles.nav__activeLink} ${styles.nav__link}` : styles.nav__link

export const Navigation = () => {
  return (
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
      <select className={styles.select} name="language" >
        <option value="RU">RU</option>
        <option value="EN">EN</option>
      </select>
    </nav>
  )
}
