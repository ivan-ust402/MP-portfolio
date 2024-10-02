import { ContactsRightSidebar } from 'src/components/ContactsRightSidebar/ContactsRightSidebar';
import styles from './contacts.module.scss';
import { useTranslation } from 'react-i18next';
import { ContactsButtons } from 'src/components';
// import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useAppSelector } from 'src/hooks/redux';


export const Contacts = () => {
  const { t } = useTranslation()
  const { desktop} = useAppSelector((state) => state.resolution)


  const getTitle = () => {
    if (i18next.language === 'en') {
      let firstWord = ''
      let secondWord = ''
      let lastWord = ''
      let lastSign = ''
      t('screens.contacts.title')
        .split(' ')
        .map((item, index) => {
          if (index === 0) {
            firstWord += item + ' '
          }
          if (index === 1) {
            secondWord += item
          }
          if (index === 2) {
            const tempArr = item.split('')
            lastSign = tempArr.pop() || ''
            lastWord = tempArr.join('')
          }
        })
        return (
          <h2 className={styles.contacts__title}>{firstWord} {secondWord}&nbsp;<span className={styles.contacts__titleSpan}>{lastWord}</span>{lastSign}</h2>
        )
    }
    if (i18next.language === 'ru') {
      let firstWord = ''
      let secondWord = ''
      let thirdWord = ''
      let fourthWord = ''
      let lastWord = ''
      t('screens.contacts.title')
        .split(' ')
        .map((item, index) => {
          if (index === 0) {
            firstWord += item + ' '
          }
          if (index === 1) {
            secondWord += item
          }
          if (index === 2) {
            thirdWord += item + ' '
          }
          if (index === 3) {
            fourthWord += item
          }
          if (index === 4) {
            lastWord += item
          }
        })
        return (
          <h2 className={styles.contacts__title}>{firstWord} {secondWord}&nbsp;{thirdWord}<span className={styles.contacts__titleSpan}>{fourthWord}&nbsp;{lastWord}</span></h2>
        )
    }
    return <h2>Test</h2>
  }



  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__main}>
        <div className={styles.contacts__content}>
          {getTitle()}
          <ContactsButtons parentKey='contactsMain' />
        </div>
      </div>
      <div className={styles.contacts__rightSidebar}>
        <div className={styles.contacts__desktop}><ContactsRightSidebar /></div>
        { !desktop && <div className={styles.contacts__tablet}><ContactsRightSidebar /></div>}
      </div>
    </div>
  )
}
