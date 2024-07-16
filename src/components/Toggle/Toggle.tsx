import styles from './toggle.module.scss'
import lightArrow from 'src/assets/img/light_arrow.svg'
import darkArrow from 'src/assets/img/dark_arrow.svg'
import nightDeveloper from 'src/assets/img/dark_man.svg'
import dayDeveloper from 'src/assets/img/light_man.svg'

interface Props {
  onChange: () => void,
  value: boolean
}

export const Toggle = ({ value, onChange }: Props) => {
  return (
    <div className={styles.toggle}>
      <div className={styles.toggle__description}>
        <div className={styles.toggle__text}>
          <p className='small-text'>Switch to dark mode</p>
        </div>
        <img className={value? styles.toggle__arrow: `${styles.toggle__arrow} ${styles.toggle__arrow_active}`} src={lightArrow} alt="arrow" />
        <img className={!value? styles.toggle__arrow: `${styles.toggle__arrow} ${styles.toggle__arrow_active}`} src={darkArrow} alt="arrow" />
      </div>
      <label className={styles.toggle__switch} htmlFor='toggler'>
        <input
          id='toggler'
          type="checkbox"
          onClick={onChange}
          checked={value}
          readOnly
        />
        <div className={styles.toggle__sun}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_45_10331)">
              <circle cx="23.9999" cy="23.9998" r="11.8214" stroke="#222222" strokeWidth="1.5" />
              <path d="M24 0V8" stroke="#222222" strokeWidth="1.5" />
              <path d="M24 48V40" stroke="#222222" strokeWidth="1.5" />
              <path d="M40 24L48 24" stroke="#222222" strokeWidth="1.5" />
              <path d="M35.54 35.54L40.9706 40.9706" stroke="#222222" strokeWidth="1.5" />
              <path d="M35.2306 12.1505L40.6612 6.71993" stroke="#222222" strokeWidth="1.5" />
              <path d="M8 24L4.76837e-07 24" stroke="#222222" strokeWidth="1.5" />
              <path d="M12.46 12.46L7.02938 7.02938" stroke="#222222" strokeWidth="1.5" />
              <path d="M12.1506 35.2306L6.72005 40.6612" stroke="#222222" strokeWidth="1.5" />
            </g>
            <defs>
              <clipPath id="clip0_45_10331">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.toggle__moon}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_45_10449" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M26.5399 3.46999C22.3848 8.82991 21.6056 16.3552 25.1585 22.5898C28.7113 28.8244 35.5828 31.99 42.3121 31.1473C40.9507 32.9034 39.227 34.4271 37.1744 35.5967C28.8572 40.3364 18.2909 37.4686 13.574 29.1913C8.85717 20.9141 11.7759 10.3618 20.0931 5.62209C22.1456 4.45244 24.3351 3.74608 26.5399 3.46999Z" />
            </mask>
            <path d="M26.5399 3.46999L27.7254 4.38901L29.9398 1.53252L26.3535 1.98162L26.5399 3.46999ZM42.3121 31.1473L43.4976 32.0664L45.712 29.2099L42.1257 29.659L42.3121 31.1473ZM26.4617 21.8472C23.2211 16.1604 23.9266 9.2892 27.7254 4.38901L25.3544 2.55097C20.8429 8.37061 19.9902 16.55 23.8552 23.3325L26.4617 21.8472ZM42.1257 29.659C35.9736 30.4294 29.7024 27.5339 26.4617 21.8472L23.8552 23.3325C27.7203 30.115 35.192 33.5507 42.4985 32.6357L42.1257 29.659ZM41.1266 30.2283C39.8841 31.8311 38.31 33.2232 36.4318 34.2935L37.9171 36.9C40.144 35.631 42.0174 33.9758 43.4976 32.0664L41.1266 30.2283ZM36.4318 34.2935C28.8283 38.6264 19.1806 36.0003 14.8773 28.4487L12.2708 29.934C17.4012 38.9369 28.886 42.0464 37.9171 36.9L36.4318 34.2935ZM14.8773 28.4487C10.5739 20.8971 13.2324 11.2582 20.8358 6.92534L19.3504 4.31885C10.3194 9.4653 7.14039 20.931 12.2708 29.934L14.8773 28.4487ZM20.8358 6.92534C22.714 5.85503 24.714 5.21036 26.7263 4.95837L26.3535 1.98162C23.9563 2.28181 21.5773 3.04985 19.3504 4.31885L20.8358 6.92534Z" fill="#F9F9F9" mask="url(#path-1-inside-1_45_10449)" />
          </svg>
        </div>
      </label>
      <img className={value ? styles.toggle__developer : `${styles.toggle__developer_active} ${styles.toggle__developer}`} src={dayDeveloper} alt="developer" />
      <img className={!value ? styles.toggle__developer : `${styles.toggle__developer_active} ${styles.toggle__developer}`} src={nightDeveloper} alt="developer" />
    </div >
  )
}

