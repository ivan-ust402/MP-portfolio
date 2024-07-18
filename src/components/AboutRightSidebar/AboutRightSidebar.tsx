
import styles from './aboutRigthSidebar.module.scss'

export const AboutRightSidebar = () => {
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.rightSidebar__text}>
        <p className='text'>Hi there!</p><br />
        <p className='text'>My name is Ivan and I do frontend development with
          a solid background in engineering.</p><br />
        <p className='text'>I love building interactive user experiences on the web.</p><br />
        <p className='text'>I believe as engineers we can create things that could potentially change the world for the better.</p>
      </div>
      <div className={styles.rightSidebar__suggestion}>
        <svg className={styles.rightSidebar__point}width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#BAF415" />
        </svg>
        <p className="text" style={{ textTransform: 'uppercase' }}>Available for work suggestions</p>
      </div>
    </div>
  )
}
