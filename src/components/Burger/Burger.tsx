import React from 'react';
import styles from './burger.module.scss';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { burgerSlice } from 'src/store/reducers/BurgerSlice';

const Burger = () => {
  const { burgerMenuStatus } = useAppSelector((state) => state.burgerMenuStatus)
  const { changeBurgerStatus } = burgerSlice.actions
  const dispatch = useAppDispatch()

  const burgerMenuHandler = () => {
    dispatch(changeBurgerStatus(!burgerMenuStatus))
  }
  return (
    <div className={styles.burger} onClick={burgerMenuHandler}>
      <span className={burgerMenuStatus? `${styles.burger__item} ${styles.active}` : styles.burger__item}></span>
    </div>
  );
}

export default Burger;
