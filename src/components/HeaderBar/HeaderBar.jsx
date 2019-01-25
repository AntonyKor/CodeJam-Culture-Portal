import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderBar.scss';

const HeaderBar = ({
  changeLanguage,
}) => (
  <div className={styles.wrapper}>
    <Link to="/">Home</Link>
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="by">Беларускі</option>
    </select>
  </div>
);

export default HeaderBar;
