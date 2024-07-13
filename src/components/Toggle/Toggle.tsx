import React from 'react'
import styles from './index.module.scss'

interface Props {
  value: boolean,
  onChange: () => void
}

export const Toggle = ({ value, onChange }: Props) => {
  return (
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
  )
}

