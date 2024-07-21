import { useTranslation } from 'react-i18next'
import styles from './projectsFilters.module.scss'

interface Props {
  projectsFilter: string
  setProjectsFilter: (value: string) => void
}

export const ProjectsFilters = ({ projectsFilter, setProjectsFilter }: Props) => {
  const { t } = useTranslation()
  const btns = ['all', 'landingPages', 'javaScript', 'vue', 'react']

  const setFilterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.dataset.name || 'all'
    setProjectsFilter(target)
  }

  return (
    <div className={styles.filters}>
      {btns.map((item, index) => (
        <button
          className={`${item === projectsFilter ? styles.filters__activeTab : ''} secondary-btn`}
          data-name={item}
          key={index}
          onClick={setFilterHandler}
        >
          {t(`screens.projects.tabs.${item}`)}
        </button>
      ))}
    </div>
  )
}
