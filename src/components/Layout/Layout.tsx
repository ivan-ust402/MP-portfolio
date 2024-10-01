import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { LeftSidebar } from 'src/components'
import { TabletHeader } from '../TabletHeader/TabletHeader'

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__header}>
        <TabletHeader />
      </div>
      <div className={styles.layout__desktop}>
        <div className={styles.layout__leftSidebar}>
          <LeftSidebar />
        </div>
        <main className={styles.layout__main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
