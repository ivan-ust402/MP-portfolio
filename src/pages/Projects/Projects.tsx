import React, { useState } from 'react'
import styles from './projects.module.scss';
import { ProjectsRightSidebar } from 'src/components/ProjectsRightSidebar/ProjectsRightSidebar';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from 'src/components/ProjectCard/ProjectCard';
import { ProjectsFilters } from 'src/components';

const cards = [
  {
    filterTitle: 'VueJs',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'LandingPages',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'JS',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'VueJs',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  },
  {
    filterTitle: 'ReactJs',
    imgName: 'GraduateWorkCover.jpg',
    projectTitle: 'E-comerce Website',
    viewLiveSrc: 'https://online-store-shop-co.vercel.app/',
    viewCodeSrc: 'https://github.com/ivan-ust402/GB-graduate-work'
  }
]

export const Projects = () => {
  const {t} = useTranslation()
  const [filter, setFilter] = useState('all')
  return (
    <div className={styles.projects}>
      <div className={styles.projects__main}>
        <div className={styles.projects__content}>
          <div className={styles.projects__titleBlock}>
            <h2>{t('screens.projects.title')}</h2>
            <ProjectsFilters projectsFilter={filter} setProjectsFilter={setFilter}/>
          </div>
          <div className={styles.projects__cards}>
            {cards.map((item, index) => (
              <ProjectCard {...item} key={index}/>
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
