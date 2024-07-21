import styles from './projectCard.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  filterTitle: string,
  imgName: string,
  projectTitle: string,
  viewCodeSrc: string,
  viewLiveSrc: string
}

export const ProjectCard = ({ filterTitle, imgName, projectTitle, viewCodeSrc, viewLiveSrc }: Props) => {
  const { t } = useTranslation()


  return (
    <div className={styles.card}>
      <div className={styles.card__imgBlock}>
        <img src={require(`src/assets/img/projectCovers/${imgName}`)} alt="Project cover" />
        <div className={styles.card__description}>
          <p className={styles.card__title}>{`[${projectTitle}]`}</p>
          <div className={`tab ${styles.card__tab}`}>{filterTitle}</div>
        </div>
      </div>
      <div className={styles.card__tabs}>
        <a className='link' href={viewLiveSrc} target='_blank' rel='noopener noreferrer'>[{t('components.card.tabs.viewLive')}]</a>
        <a className='link' href={viewCodeSrc} target='_blank' rel='noopener noreferrer'>{`[${t('components.card.tabs.viewCode')}]`}</a>
      </div>
    </div>
  )
}
