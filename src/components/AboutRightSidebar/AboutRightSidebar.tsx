
import { useTranslation } from 'react-i18next'
import styles from './aboutRigthSidebar.module.scss'
import { AboutSuggestion } from '../AboutSuggestion/AboutSuggestion'
import { useAppSelector } from 'src/hooks/redux'

export const AboutRightSidebar = () => {
  const { t } = useTranslation()
  const { desktop } = useAppSelector(state => state.resolution)
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.rightSidebar__wrapper}>
        <div className={styles.rightSidebar__text}>
          <p className='text'>{t('screens.about.rightSidebar.firstParagraph')}</p><br />
          <p className='text'>{t('screens.about.rightSidebar.secondParagraph')}</p><br />
          <p className='text'>{t('screens.about.rightSidebar.thirdParagraph')}</p><br />
          <p className='text'>{t('screens.about.rightSidebar.fourthParagraph')}</p>
         
        </div>
        {desktop && <div className={styles.rightSidebar__suggestion}>
          <AboutSuggestion />
        </div>}
      </div>
    </div>
  )
}
