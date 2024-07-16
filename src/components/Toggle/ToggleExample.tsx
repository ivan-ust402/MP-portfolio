import React from 'react'
import styles from './toggleExample.module.scss'

interface Props {
  onChange: () => void,
  value: boolean
}

export const Toggle = ({ value, onChange }: Props) => {
  return (
    <div className='toggle-block'>
    <label className={styles.root} htmlFor='toggler'>
      <input
        id='toggler'
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
    </div >
  )
}

