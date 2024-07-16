import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { LeftSidebar, RightSidebar } from 'src/components'

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <LeftSidebar />
      <main className={styles.layout__main}>
        <Outlet />
      </main>
      <RightSidebar />
    </div>
  )
}
