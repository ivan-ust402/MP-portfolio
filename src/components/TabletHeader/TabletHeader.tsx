import React, { useState } from 'react';
import styles from './tabletHeader.module.scss'
import { useTranslation } from 'react-i18next';
import { AboutSuggestion } from '../AboutSuggestion/AboutSuggestion';
import Burger from '../Burger/Burger';
import { useLocation } from 'react-router-dom';



export const TabletHeader = () => {
  const HOMEPAGE = '/'
  const PROJECTS_PAGE = '/projects'
  const CONTACTS_PAGE = '/contacts'
  const { t } = useTranslation()
  const location = useLocation().pathname
  const [locationState, setLocationState] = useState('')
  if (locationState !== location) {
    setLocationState(location)
  }
  return (
    <header className={styles.header}>
      { (locationState === HOMEPAGE || locationState === CONTACTS_PAGE) && <div className={styles.header__content}>
        <h1 className={styles.header__title}>{t('screens.about.title')}</h1>
        <AboutSuggestion />
      </div>}
      { locationState === PROJECTS_PAGE && <div className={styles.header__content}>
        <h2 className={styles.header__title}>{t('screens.projects.title')}</h2>
      </div>}      
      <div className={styles.header__burger}>
        <Burger />
      </div>
    </header>
  );
}

