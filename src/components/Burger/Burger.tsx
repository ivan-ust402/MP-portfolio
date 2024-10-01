import React from 'react';
import styles from './burger.module.scss';

const Burger = () => {
  return (
    <div className={styles.burger}>
      <span className={styles.burger__item}></span>
    </div>
  );
}

export default Burger;
