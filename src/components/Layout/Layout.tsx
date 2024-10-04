import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { LeftSidebar } from 'src/components'
import { TabletHeader } from '../TabletHeader/TabletHeader'
import { useAppSelector } from 'src/hooks/redux'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

export const Layout = () => {
  const { burgerMenuStatus } = useAppSelector((state) => state.burgerMenuStatus)
  const { height } = useAppSelector(state => state.viewportHeight)

  return (
    <div className={styles.layout}>
      <ScrollToTop />
      <div className={styles.layout__header}>
        <TabletHeader />
      </div>
      <div className={styles.layout__desktop}>
        <div className={styles.layout__leftSidebar}>
          <LeftSidebar />
        </div>
        <main className={styles.layout__main} style={{ height: `${height}px`}}>
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
