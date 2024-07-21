import { ContactsRightSidebar } from 'src/components/ContactsRightSidebar/ContactsRightSidebar';
import styles from './contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__main}>
        <div className={styles.contacts__content}>
          Contacts
        </div>
      </div>
      <div className={styles.contactss__rightSidebar}>
        <ContactsRightSidebar />
      </div>
    </div>
  )
}
