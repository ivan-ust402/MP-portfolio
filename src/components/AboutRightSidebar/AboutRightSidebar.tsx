
import { useTranslation } from 'react-i18next'
import styles from './aboutRigthSidebar.module.scss'

export const AboutRightSidebar = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.rightSidebar__wrapper}>
        <div className={styles.rightSidebar__text}>
          <p className='text'>{t('screens.about.rightSidebar.firstParagraph')}</p><br />
          <p className='text'>{t('screens.about.rightSidebar.secondParagraph')}</p><br />
          <p className='text'>{t('screens.about.rightSidebar.thirdParagraph')}</p><br />
          <p className='text'>{t('screens.about.rightSidebar.fourthParagraph')}</p>
        </div>
        <div className={styles.rightSidebar__suggestion}>
          <svg className={styles.rightSidebar__point} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#BAF415" />
          </svg>
          <p className="text" style={{ textTransform: 'uppercase' }}>{t('screens.about.rightSidebar.point')}</p>
        </div>
      </div>
    </div>
  )
}
