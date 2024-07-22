import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './contactsButtons.module.scss';

interface Props {
  parentKey: string
}

export const ContactsButtons = ({parentKey}: Props) => {
  const [successCopyText, setSuccessCopyText] = useState('')
  const [errorCopyText, setErrorCopyText] = useState('')
  const { t } = useTranslation()
  const wrapperStyleName = 
  parentKey === 'leftSidebar' && styles.tabs 
  || styles.btns
  const linkStyleName = 
  parentKey === 'leftSidebar' && 'link' 
  || 'third-btn'
  const telegramBtnText = 
  parentKey === 'leftSidebar' && 'components.leftSidebar.tabs.telegram' 
  || 'screens.contacts.buttons.telegram'
  const emailBtnText = 
  parentKey === 'leftSidebar' && 'components.leftSidebar.tabs.email' 
  || 'screens.contacts.buttons.email'

  const copyTextToClipboard = async (text: string) => {
    try {
      setErrorCopyText('')
      await navigator.clipboard.writeText(text)
      setSuccessCopyText(t('components.leftSidebar.message.success'))

      await new Promise((res) => setTimeout(res, 1500))
      setSuccessCopyText('')
    } catch (error) {
      setErrorCopyText(t('components.leftSidebar.message.error'))
      await new Promise((res) => setTimeout(res, 1500))
      setErrorCopyText('')
    }
  }
  return (
    <div className={wrapperStyleName}>
      <a className={linkStyleName} href='https://t.me/IvanUst_nsk' target='_blank' rel='noopener noreferrer'>[{t(telegramBtnText)}]</a>
      <a className={linkStyleName} onClick={() => copyTextToClipboard('Vangold915@gmail.com')}>[{t(emailBtnText)}]</a>
      <div className={styles.message}>
        {
          errorCopyText && <p className={styles.error}>{errorCopyText}</p>}
        {
          successCopyText && <p className={styles.success}>{successCopyText}</p>
        }
      </div>
    </div>
  );
}

