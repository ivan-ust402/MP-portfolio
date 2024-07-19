import React from 'react'
import styles from './about.module.scss'
import { AboutRightSidebar } from 'src/components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.about}>
      <div className={styles.about__main}>
        <div className={styles.about__content}>
          <h1>{t('screens.about.title')}</h1>
          <div className={styles.about__text}>
            <p>function showSkills() {'{'}</p>
            <p>&nbsp;&nbsp;const skills = {'['}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`HTML`, `CSS`, `JavaScript`, `React`, `Git`, </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`ООП`, `C/C++`, `React`, `Gulp`, `Redux`,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`ReactJS`, `Webpack`, `SOLID`, `ES6`, </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`Redux-Saga`, `Redux-thunk`, `C#`,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`TypeScript`,  `MySQL`, `Linux`, `Python`,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`Java`, `Docker`, `Sass`, `Less`, `Bootstrap`, </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;`Jest`, `Firebase`</p>
            <p>&nbsp;&nbsp;{'];'}</p>
            <p>&nbsp;&nbsp;{'console.log(\'My skills:\');'}</p>
            <p>&nbsp;&nbsp;{'skills.forEach(skill => {'}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(skill);</p>
            <p>&nbsp;&nbsp;{'})'};</p>
            <p>{'}'};</p>
          </div>
        </div>
        <Link className={`${styles.about__btn} primary-btn text`} to={'projects'}>[{t('screens.about.button')}]</Link>
      </div>
      <AboutRightSidebar />
    </div>
  )
}
