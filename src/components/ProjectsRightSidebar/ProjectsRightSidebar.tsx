import React from 'react'
import styles from './projectsRigthSidebar.module.scss';
import { useTranslation } from 'react-i18next';

export const ProjectsRightSidebar = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.rightSidebar}>
      <ul className={styles.rightSidebar__list}>
        <li className={styles.rightSidebar__item}>
          {t('screens.projects.rightSidebar.firstParagraph')}
          <div className={styles.rightSidebar__tabs}>
            <div className='tab'>
              ReactJS
            </div>
            <div className='tab'>
              ReactJS
            </div>
          </div>
        </li>
        <li className={styles.rightSidebar__item}>
          {t('screens.projects.rightSidebar.secondParagraph')}
        </li>
        <li className={styles.rightSidebar__item}>
          {t('screens.projects.rightSidebar.thirdParagraph')}
        </li>
        <li className={styles.rightSidebar__item}>
          {t('screens.projects.rightSidebar.fourthParagraph')}
        </li>
        <li className={styles.rightSidebar__item}>
          {t('screens.projects.rightSidebar.fifthParagraph')}
        </li>
        <li className={styles.rightSidebar__item}>
          {t('screens.projects.rightSidebar.sixthParagraph')}
        </li>
      </ul>
    </div>
  )
}
