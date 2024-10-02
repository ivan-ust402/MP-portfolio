import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { LeftSidebar } from 'src/components'
import { TabletHeader } from '../TabletHeader/TabletHeader'
import { useAppSelector } from 'src/hooks/redux'

export const Layout = () => {
  const { burgerMenuStatus } = useAppSelector((state) => state.burgerMenuStatus)

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
          {
            burgerMenuStatus ?
              <div className={styles.layout__burgerMenu}>
                <LeftSidebar />
              </div>
              : <Outlet />
          }
        </main>
      </div>
    </div>
  )
}
