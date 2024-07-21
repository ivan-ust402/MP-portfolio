import React, { useEffect, useState } from 'react'
import styles from './projects.module.scss';
import { ProjectsRightSidebar } from 'src/components/ProjectsRightSidebar/ProjectsRightSidebar';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from 'src/components/ProjectCard/ProjectCard';
import { ProjectsFilters } from 'src/components';

const cards = [
  {
    filterTitle: 'VueJs',
    filter: 'vue',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'LandingPages',
    filter: 'landingPages',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'JS',
    filter: 'javaScript',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'VueJs',
    filter: 'vue',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'ReactJs',
    filter: 'react',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  }
]

interface Project {
  filter: string,
  filterTitle: string,
  imgName: string,
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
      await new Promise((res) => setTimeout(res, 1000))
      setProjects(cards)
    } catch (err) {
      console.log(err)
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
            <ProjectsFilters projectsFilter={filter} setProjectsFilter={setFilter} />
          </div>
          <div className={styles.projects__cards}>
            {
              filter === 'all'
                ? projects
                  .map((item, index) => (
                    <ProjectCard {...item} key={index} />
                  ))
                : cards
                  .filter(item => item.filter.toLowerCase() === filter.toLowerCase())
                  .map((item, index) => (
                    <ProjectCard {...item} key={index} />
                  ))}

          </div>
        </div>
      </div>
      <div className={styles.projects__rightSidebar}>
        <ProjectsRightSidebar />
      </div>
    </div>
  )
}
