import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './HomePage.scss';
import AboutTeam from '../../components/AboutTeam';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.wrapper}>
        {t('hello')} from HomePage
        <Link to="/Poets">Go to PoetsList component</Link>
        <h2>{t('portalTitle')}</h2> 
        <p className={styles.portalDescription}>
           {t('portalDescription')} 
        </p>
        <AboutTeam />
      </div>
    );
  }
}

export default withNamespaces()(HomePage);
