import React, { useEffect } from 'react'
import styles from './about.module.scss'
import { AboutRightSidebar } from 'src/components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const { t } = useTranslation()
  const printedText = () => {
    const nodes = document.querySelectorAll('#animate')
    nodes
    .forEach((item, index, array) => {
      if (index !== array.length - 1) {
        setTimeout(() => {
          item.classList.add(`${styles.about__typing}`)
          item.classList.remove(`${styles.about__text_hidden}`)
        }, index * 1500)
      }
      else {
        setTimeout(() => {
          item.classList.add(`${styles.about__typingEnd}`)
          item.classList.remove(`${styles.about__text_hidden}`)
        }, index * 1500)
      }
    })
    
  }

  useEffect(() => {
    printedText()
  }, [])

  return (
    <div className={styles.about}>
      <div className={styles.about__main}>
        <div className={styles.about__content}>
          <h1>{t('screens.about.title')}</h1>
          <div id='code' className={styles.about__text}>
            <p id='animate' className={styles.about__text_hidden}>function showSkills() {'{'}</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;const skills = {'['}</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`HTML`, `CSS`, `JavaScript`, `React`, `Git`, </p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`OOP`, `C/C++`, `React`, `Gulp`, `Redux`,</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`Redux-toolkit`, `Webpack`, `SOLID`, `ES6`, </p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`Redux-Saga`, `Redux-thunk`, `C#`,</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`TypeScript`,  `MySQL`, `Linux`, `Python`,</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`Java`, `Docker`, `Sass`, `Less`, `Bootstrap`, </p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;`Jest`, `Firebase`</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;{'];'}</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;{'console.log(\'My skills:\');'}</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;{'skills.forEach(skill => {'}</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;&nbsp;&nbsp;console.log(skill);</p>
            <p id='animate' className={styles.about__text_hidden}>&nbsp;&nbsp;{'})'};</p>
            <p id='animate' className={styles.about__text_hidden}>{'}'};</p>
            
          </div>
        </div>
        <Link className={`${styles.about__btn} primary-btn text`} to={'projects'}>[{t('screens.about.button')}]</Link>
      </div>
      <div className={styles.about__rightSidebar}>
        <AboutRightSidebar />
      </div>
    </div>
  )
}
