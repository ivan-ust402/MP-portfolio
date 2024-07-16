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
        <img className={value ? styles.toggle__arrow : `${styles.toggle__arrow} ${styles.toggle__arrow_active}`} src={lightArrow} alt="arrow" />
        <img className={!value ? styles.toggle__arrow : `${styles.toggle__arrow} ${styles.toggle__arrow_active}`} src={darkArrow} alt="arrow" />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <mask id="path-1-inside-1_193_738" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M26.5399 3.47008C22.3848 8.83 21.6056 16.3553 25.1585 22.5899C28.7113 28.8245 35.5828 31.9901 42.3121 31.1474C40.9507 32.9035 39.227 34.4272 37.1744 35.5968C28.8572 40.3365 18.2909 37.4687 13.574 29.1914C8.85717 20.9142 11.7759 10.3618 20.0931 5.62219C22.1456 4.45253 24.3351 3.74617 26.5399 3.47008Z" />
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M26.5399 3.47008C22.3848 8.83 21.6056 16.3553 25.1585 22.5899C28.7113 28.8245 35.5828 31.9901 42.3121 31.1474C40.9507 32.9035 39.227 34.4272 37.1744 35.5968C28.8572 40.3365 18.2909 37.4687 13.574 29.1914C8.85717 20.9142 11.7759 10.3618 20.0931 5.62219C22.1456 4.45253 24.3351 3.74617 26.5399 3.47008Z" fill="none" />
            <path d="M26.5399 3.47008L27.7254 4.38911L29.9398 1.53261L26.3535 1.98171L26.5399 3.47008ZM42.3121 31.1474L43.4976 32.0665L45.712 29.21L42.1257 29.6591L42.3121 31.1474ZM26.4617 21.8473C23.2211 16.1605 23.9266 9.2893 27.7254 4.38911L25.3544 2.55106C20.8429 8.3707 19.9902 16.5501 23.8552 23.3326L26.4617 21.8473ZM42.1257 29.6591C35.9736 30.4295 29.7024 27.534 26.4617 21.8473L23.8552 23.3326C27.7203 30.1151 35.192 33.5508 42.4985 32.6358L42.1257 29.6591ZM41.1266 30.2284C39.8841 31.8312 38.31 33.2233 36.4318 34.2936L37.9171 36.9001C40.144 35.6311 42.0174 33.9758 43.4976 32.0665L41.1266 30.2284ZM36.4318 34.2936C28.8283 38.6265 19.1806 36.0003 14.8773 28.4488L12.2708 29.9341C17.4012 38.937 28.886 42.0465 37.9171 36.9001L36.4318 34.2936ZM14.8773 28.4488C10.5739 20.8972 13.2324 11.2583 20.8358 6.92543L19.3504 4.31894C10.3194 9.46539 7.14039 20.9311 12.2708 29.9341L14.8773 28.4488ZM20.8358 6.92543C22.714 5.85512 24.714 5.21045 26.7263 4.95846L26.3535 1.98171C23.9563 2.2819 21.5773 3.04994 19.3504 4.31894L20.8358 6.92543Z" fill="#F9F9F9" mask="url(#path-1-inside-1_193_738)" />
          </svg>
        </div>
      </label>
      <img className={value ? styles.toggle__developer : `${styles.toggle__developer_active} ${styles.toggle__developer}`} src={dayDeveloper} alt="developer" />
      <img className={!value ? styles.toggle__developer : `${styles.toggle__developer_active} ${styles.toggle__developer}`} src={nightDeveloper} alt="developer" />
    </div >
  )
}

