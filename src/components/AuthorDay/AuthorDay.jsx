import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './AuthorDay.scss';
import authors from '../../data';


const id = authors[31 % 6].id;

class AuthorDay extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.wrapper}>
        <h2>{t('authorOfTheDay')}</h2> 
        <Link to={`/Poets${id}`}>{t(`name${id}`)}</Link>
      </div>
    );
  }
}

export default withNamespaces()(AuthorDay);
