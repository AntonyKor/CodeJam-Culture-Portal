import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './HomePage.scss';

class HomePage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.wrapper}>
        {t('hello')} from HomePage
        <Link to="/Poets">Go to PoetsList component</Link>
      </div>
    );
  }
}

export default withNamespaces()(HomePage);
