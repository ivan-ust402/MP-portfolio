import styles from './projectCard.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  filterTitle: string,
  imgName: string,
  liveVersion: boolean,
  projectTitle: string,
  viewCodeSrc: string,
  viewLiveSrc: string
}

export const ProjectCard = ({ filterTitle, imgName, projectTitle, liveVersion, viewCodeSrc, viewLiveSrc }: Props) => {
  const { t } = useTranslation()


  return (
    <div className={styles.card}>
      <div className={styles.card__imgBlock}>
        <img src={require(`src/assets/img/projectCovers/${imgName}`)} alt="Project cover" />
        <div className={styles.card__description}>
          <div className={`${styles.card__title}`}>
            <p className={`${styles.card__titleText} text`}>
              {`[${projectTitle}]`}
            </p>
          </div>
          <div className={`tab ${styles.card__tab}`}>
            <p className={`${styles.card__tabText} text`}>
              {filterTitle}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card__links}>
        <a className='link' href={viewLiveSrc} target='_blank' rel='noopener noreferrer'>[{liveVersion ? t('components.card.tabs.viewLive') : t('components.card.tabs.viewReadme')}]</a>
        <a className='link' href={viewCodeSrc} target='_blank' rel='noopener noreferrer'>{`[${t('components.card.tabs.viewCode')}]`}</a>
      </div>
    </div>
  )
}
