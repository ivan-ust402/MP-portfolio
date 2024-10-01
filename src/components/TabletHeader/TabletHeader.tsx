import React from 'react';
import styles from './tabletHeader.module.scss'
import { useTranslation } from 'react-i18next';
import { AboutSuggestion } from '../AboutSuggestion/AboutSuggestion';
import Burger from '../Burger/Burger';



export const TabletHeader = () => {
  const { t } = useTranslation()
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>{t('screens.about.title')}</h1>
        <AboutSuggestion />
      </div>
      <div className={styles.header__burger}>
        <Burger />
      </div>
    </header>
  );
}

