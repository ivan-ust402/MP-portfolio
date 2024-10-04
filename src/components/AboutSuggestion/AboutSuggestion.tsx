import React from 'react';
import styles from './aboutSuggestion.module.scss'
import { useTranslation } from 'react-i18next'
// import { useAppSelector } from 'src/hooks/redux';

export const AboutSuggestion = () => {
  const { t } = useTranslation()
  // const {height} = useAppSelector(state => state.viewportHeight)
  return (
    <div className={styles.suggestion}>
      <svg className={styles.suggestion__point} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#BAF415" />
      </svg>
      {/* <p className="text" style={{ textTransform: 'uppercase' }}>{t('screens.about.rightSidebar.point')} {height}</p> */}
      <p className="text" style={{ textTransform: 'uppercase' }}>{t('screens.about.rightSidebar.point')}</p>
    </div>
  );
}
