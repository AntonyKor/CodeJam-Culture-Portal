import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './AuthorDay.scss';

class AuthorDay extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.wrapper}>
        <h2>{t('authorOfTheDay')}</h2> 
        <img src={require('../../images/photo/kupala.jpg')} />
        <Link to="/Poets">Купала</Link>
      </div>
    );
  }
}

export default withNamespaces()(AuthorDay);
