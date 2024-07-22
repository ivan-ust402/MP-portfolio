import { ContactsRightSidebar } from 'src/components/ContactsRightSidebar/ContactsRightSidebar';
import styles from './contacts.module.scss';
import { useTranslation } from 'react-i18next';
import { ContactsButtons } from 'src/components';


export const Contacts = () => {
  const { t } = useTranslation()
  let startTitle = ''
  let middleTitle = ''
  let endTitle = ''
  t('screens.contacts.title')
    .split(' ')
    .map((item, index, array) => {
      if (index !== array.length - 1) {
        startTitle += item.toString() + ' '
      }
      if (index === array.length - 1) {
        const temp = item.split('')
        const lastSign = temp[temp.length - 1]
        if (lastSign === '?') {
          endTitle += lastSign
        } else {
          endTitle = ''
        }
        middleTitle += temp.join('')
      }
    })
    
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__main}>
        <div className={styles.contacts__content}>
          <h2 className={styles.contacts__title}>{startTitle}<span className={styles.contacts__titleSpan}>{middleTitle}</span>{endTitle}</h2>
          <ContactsButtons parentKey='contactsMain'/>
        </div>
      </div>
      <div className={styles.contacts__rightSidebar}>
        <ContactsRightSidebar />
      </div>
    </div>
  )
}
