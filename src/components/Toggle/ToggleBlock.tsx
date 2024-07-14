import React from 'react'
import lightSwitch from 'src/assets/img/light_switch.svg'
import lightSun from 'src/assets/img/light_sun.svg'
import lightMan from 'src/assets/img/light_man.svg'
import darkSwitch from 'src/assets/img/dark_switch.svg'
import darkMoon from 'src/assets/img/dark_moon.svg'
import darkMan from 'src/assets/img/dark_man.svg'
import styles from './toggle.module.scss'

interface Props {
  isLight: boolean
}

export default function ToggleBlock({ isLight }: Props) {
  return (
    <div className='toggle-block'>
      <div className={isLight ? styles.active : styles.inactive}>
        <img src={lightSwitch} alt="switch description" />
        <img src={lightSun} alt="toggle picture sun" />
        <img src={lightMan} alt="toggle picture developer" />
      </div>
      <div className={isLight ? styles.inactive : styles.active}>
        <img src={darkSwitch} alt="switch description" />
        <img src={darkMoon} alt="toggle picture moon" />
        <img src={darkMan} alt="toggle picture developer" />
      </div>
    </div>
  )
}
