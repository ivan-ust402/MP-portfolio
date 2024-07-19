import React from 'react'
import styles from './project.module.scss';
import { ProjectsRightSidebar } from 'src/components/ProjectsRightSidebar/ProjectsRightSidebar';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__main}>
        <div className={styles.projects__content}>
          Projects
        </div>
      </div>
      <ProjectsRightSidebar />

    </div>
  )
}
