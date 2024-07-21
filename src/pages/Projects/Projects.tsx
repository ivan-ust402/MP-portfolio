import React from 'react'
import styles from './projects.module.scss';
import { ProjectsRightSidebar } from 'src/components/ProjectsRightSidebar/ProjectsRightSidebar';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.projects}>
      <div className={styles.projects__main}>
        <div className={styles.projects__content}>
          <div className={styles.projects__titleBlock}>
            <h2>{t('screens.projects.title')}</h2>
            <div className={styles.projects__filters}>
              <button className={`${styles.projects__activeTab} secondary-btn`}>{t('screens.projects.tabs.all')}</button>
              <button className='secondary-btn'>{t('screens.projects.tabs.landingPages')}</button>
              <button className='secondary-btn'>{t('screens.projects.tabs.javaScript')}</button>
              <button className='secondary-btn'>{t('screens.projects.tabs.vue')}</button>
              <button className='secondary-btn'>{t('screens.projects.tabs.react')}</button>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.projects__rightSidebar}>
        <ProjectsRightSidebar />
      </div>
    </div>
  )
}
