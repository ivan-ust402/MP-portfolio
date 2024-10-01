
import { useTranslation } from 'react-i18next'
import styles from './aboutRigthSidebar.module.scss'
import { AboutSuggestion } from '../AboutSuggestion/AboutSuggestion'

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
          <AboutSuggestion />
        </div>
      </div>
    </div>
  )
}
