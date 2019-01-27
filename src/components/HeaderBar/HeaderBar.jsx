import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderBar.scss';

const HeaderBar = ({
  changeLanguage,
}) => (
  <div className={styles.wrapper}>
    <h1>Белорусские поэты</h1>
    <nav>
      <NavLink exact to="/" className={styles.navLink} activeClassName={styles.active}>Главная</NavLink>
      <span>|</span>
      <NavLink exact to="/Poets" className={styles.navLink} activeClassName={styles.active}>Перейти к списку поэтов</NavLink>
    </nav>
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="by">Беларускі</option>
    </select>
  </div>
);

export default HeaderBar;
