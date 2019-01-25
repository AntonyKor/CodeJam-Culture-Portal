import React from 'react';
import { withNamespaces } from 'react-i18next';
import styles from './Poet.scss';

class Poet extends React.Component {
  render() {
    const { t, match } = this.props;
    return (
      <div className={styles.wrapper}>
        {t('hello')} from Poet. Poet id is: {match.params.id}
      </div>
    );
  }
}

export default withNamespaces()(Poet);
