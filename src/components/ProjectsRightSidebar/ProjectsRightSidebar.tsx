import React from 'react'
import styles from './projectsRigthSidebar.module.scss';
import { useTranslation } from 'react-i18next';

export const ProjectsRightSidebar = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.rightSidebar__wrapper}>
        <ul className={styles.rightSidebar__list}>
          <li className={styles.rightSidebar__item}>
            {t('screens.projects.rightSidebar.firstParagraph')}
            <div className={styles.rightSidebar__tabs}>
              <div className='tab'>
                ReactJS
              </div>
              <div className='tab'>
                Redux
              </div>
              <div className='tab'>
                Redux-Saga
              </div>
              <div className='tab'>
                Redux-Thunk
              </div>
              <div className='tab'>
                TypeScript
              </div>
              <div className='tab'>
                VueJS
              </div>
              <div className='tab'>
                Redux-Toolkit
              </div>
            </div>
          </li>
          <li className={styles.rightSidebar__item}>
            {t('screens.projects.rightSidebar.secondParagraph')}
            <div className={styles.rightSidebar__tabs}>
              <div className='tab'>
                MySQL
              </div>
            </div>
          </li>
          <li className={styles.rightSidebar__item}>
            {t('screens.projects.rightSidebar.thirdParagraph')}
            <div className={styles.rightSidebar__tabs}>
              <div className='tab'>
                Linux
              </div>
              <div className='tab'>
                Nginx
              </div>
              <div className='tab'>
                Apache
              </div>
              <div className='tab'>
                Docker
              </div>
              <div className='tab'>
                PHP-fpm servers
              </div>
            </div>
          </li>
          <li className={styles.rightSidebar__item}>
            {t('screens.projects.rightSidebar.fourthParagraph')}
            <div className={styles.rightSidebar__tabs}>
              <div className='tab'>
                SOLID principles
              </div>
            </div>
          </li>
          <li className={styles.rightSidebar__item}>
            {t('screens.projects.rightSidebar.fifthParagraph')}
          </li>
          <li className={styles.rightSidebar__item}>
            {t('screens.projects.rightSidebar.sixthParagraph')}
          </li>
        </ul>
      </div>

    </div>
  )
}
