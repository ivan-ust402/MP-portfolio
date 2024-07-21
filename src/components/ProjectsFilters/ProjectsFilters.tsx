import { useTranslation } from 'react-i18next'
import styles from './projectsFilters.module.scss'

interface Props {
  projectsFilter: string,
  setError: (value: string) => void,
  setLoading: (value: boolean) => void,
  setProjectsFilter: (value: string) => void
}

export const ProjectsFilters = ({ projectsFilter, setProjectsFilter, setLoading,  setError }: Props) => {
  const { t } = useTranslation()
  const btns = ['all', 'landingPages', 'javaScript', 'vue', 'react']

  const setFilterHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      setLoading(true)
      setError('')
      const target = e.currentTarget.dataset.name || 'all'
      await new Promise(res => setTimeout(res, 1000))
      setLoading(false)
      setProjectsFilter(target)
    } catch (err) {
      setLoading(false)
      setError('Something went wrong!!!')
    }

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
