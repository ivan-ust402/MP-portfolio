import React from 'react'
import styles from './contactsRigthSidebar.module.scss';

interface Props {
  position: string
}

export const ContactsRightSidebar = ({position}: Props) => {
  const technologyArray = [
    'VS', 'Code', 'GitHub', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'OOP', 'C/C++', 'React', 'Gulp', 'Redux', 'ReactJS', 'Webpack', 'SOLID', 'ES6', 'Redux-Saga', 'Redux-thunk', 'C#', 'TypeScript', 'Code', 'Refactoring', 'MySQL', 'Linux', 'Python', 'Java', 'Docker', 'Sass', 'Less', 'Bootstrap', 'Jest', 'Firebase', 'Gulp', 'Webpack', 'Materialize', 'CSS', 'SPA', 'PWA', 'Redux-Toolkit', 'VueJS', 'React-Router-Rom', 'Vuex', 'Axios', 'Software Architecture', 'Agile', 'Computer Network' 
  ]
  return (
    <div className={position === 'standart' ? styles.rightSidebar : `${styles.rightSidebar} ${styles.rightSidebar_right}`}>
      {technologyArray.map((item, index) => (
        <p className={`${styles.rightSidebar__item} text`} key={index}>{item}</p>
      ))}
      {technologyArray.map((item, index) => (
        <p className={`${styles.rightSidebar__item} text`} key={index}>{item}</p>
      ))}
      {technologyArray.map((item, index) => (
        <p className={`${styles.rightSidebar__item} text`} key={index}>{item}</p>
      ))}
      {technologyArray.map((item, index) => (
        <p className={`${styles.rightSidebar__item} text`} key={index}>{item}</p>
      ))}
      {technologyArray.map((item, index) => (
        <p className={`${styles.rightSidebar__item} text`} key={index}>{item}</p>
      ))}
      {technologyArray.map((item, index) => (
        <p className={`${styles.rightSidebar__item} text`} key={index}>{item}</p>
      ))}
    </div>
  )
}
