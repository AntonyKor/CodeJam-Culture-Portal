import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './PoetsList.scss';

class PoetsList extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.wrapper}>
        {t('hello')} from PoetsList
        <Link to="/Poets/3">Go to Poet component with id 3</Link>
      </div>
    );
  }
}

export default withNamespaces()(PoetsList);
