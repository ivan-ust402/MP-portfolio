import React, { useEffect, useState } from 'react'
import styles from './projects.module.scss';
import { ProjectsRightSidebar } from 'src/components/ProjectsRightSidebar/ProjectsRightSidebar';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from 'src/components/ProjectCard/ProjectCard';
import { Error, Loader, ProjectsFilters } from 'src/components';

const cards = [
  {
    filterTitle: 'VueJs',
    filter: 'vue',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    liveVersion: true,
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: '1. First following a link. Redirect to sign In page.jpg',
    projectTitle: 'App with user registration and authorization',
    liveVersion: false,
    viewLiveSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/blob/main/MN/authorization-typescript/README.md',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/tree/main/MN/authorization-typescript'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: '0. HomePage.jpg',
    projectTitle: 'React-router-dom training application',
    liveVersion: false,
    viewLiveSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/blob/main/MN/react-router-dom-v6/README.md',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/tree/main/MN/react-router-dom-v6'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: '2024-05-31_19-33-52.jpg',
    projectTitle: 'React+redux toolkit+RTK query+typescript+ training App',
    liveVersion: false,
    viewLiveSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/blob/main/UlbiTV/react%2Bredux%2Btypescript/react-redux-typescript-2-toolkit-rtkquery/README.md',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/tree/main/UlbiTV/react%2Bredux%2Btypescript/react-redux-typescript-2-toolkit-rtkquery'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: '2024-05-28_00-34-08.jpg',
    projectTitle: 'React, Redux Saga training App',
    liveVersion: false,
    viewLiveSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/blob/main/UlbiTV/react%2Bredux/react-redux-ulbitv-part-2/README.md',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/tree/main/UlbiTV/react%2Bredux/react-redux-ulbitv-part-2'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: '2024-05-27_21-23-34.jpg',
    projectTitle: 'React, Redux Saga training App',
    liveVersion: false,
    viewLiveSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/blob/main/UlbiTV/react%2Bredux/react-redux-ulbitv/README.md',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/tree/main/UlbiTV/react%2Bredux/react-redux-ulbitv'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: '2024-05-29_00-48-29.jpg',
    projectTitle: 'React+redux+typescript training App',
    liveVersion: false,
    viewLiveSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/blob/main/UlbiTV/react%2Bredux%2Btypescript/react-redux-typescript-1/README.md',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-react-and-other-technologies-training/tree/main/UlbiTV/react%2Bredux%2Btypescript/react-redux-typescript-1'
  },
  {
    filterTitle: 'VueJs',
    filter: 'vue',
    imgName: 'Interno.jpg',
    projectTitle: 'Interno Website',
    liveVersion: false,
    viewLiveSrc: 'https://gb-vue-js.vercel.app/projects',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-Vue.js/tree/main/project-vue-cli-refactoring'
  },
  {
    filterTitle: 'JS',
    filter: 'javaScript',
    imgName: 'duck-hunting.jpg',
    projectTitle: 'Duck hunting game',
    liveVersion: true,
    viewLiveSrc: 'https://ivan-ust402.github.io/MP-Game-duck-hunting/',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-Game-duck-hunting'
  },
  {
    filterTitle: 'LandingPage',
    filter: 'landingPages',
    imgName: 'clothes store.jpg',
    projectTitle: 'Clothing store landing',
    liveVersion: true,
    viewLiveSrc: 'https://ivan-ust402.github.io/MP-clothes-store-landing/',
    viewCodeSrc: 'https://github.com/ivan-ust402/MP-clothes-store-landing'
  }
]

interface Project {
  filter: string,
  filterTitle: string,
  imgName: string,
  liveVersion: boolean,
  projectTitle: string,
  viewCodeSrc: string,
  viewLiveSrc: string
}

export const Projects = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      setLoading(true)
      setError('')
      await new Promise((res) => setTimeout(res, 500))
      setProjects(cards)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError('Something went wrong!')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className={styles.projects}>
      <div className={styles.projects__main}>
        <div className={styles.projects__content}>
          <div className={styles.projects__titleBlock}>
            <h2>{t('screens.projects.title')}</h2>
            <ProjectsFilters
              projectsFilter={filter}
              setProjectsFilter={setFilter}
              setLoading={setLoading}
              setError={setError}
            />
          </div>
          {loading && <Loader />}
          {error && <Error />}
          {
            !loading
            && !error
            && <div className={styles.projects__cards}>
              {
                filter === 'all'
                  ? projects
                    .map((item, index) => (
                      <ProjectCard {...item} key={index} />
                    ))
                  : projects
                    .filter(item => item.filter.toLowerCase() === filter.toLowerCase())
                    .map((item, index) => (
                      <ProjectCard {...item} key={index} />
                    ))}
            </div>
          }
        </div>
      </div>
      <div className={styles.projects__rightSidebar}>
        <ProjectsRightSidebar />
      </div>
    </div>
  )
}
