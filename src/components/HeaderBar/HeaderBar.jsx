import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderBar.scss';

const HeaderBar = ({
  changeLanguage,
}) => (
  <div className={styles.wrapper}>
    <h1>Белорусские поэты</h1>
    <div className={styles.navigation}>
      <Link className={styles.navLink} to="/">Главная</Link>
      <span>|</span>
      <Link className={styles.navLink} to="/Poets">Перейти к списку поэтов</Link>
    </div>
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="by">Беларускі</option>
    </select>
  </div>
);

export default HeaderBar;
