import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './PoetsList.scss';
import authors from 'src/data';

class PoetsList extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className={styles.wrapper}>
        {t('hello')} from PoetsList
        {authors.map(author => (
          <Link to={`/Poets/${author.id}`}>Go to Poet component with id {author.id}</Link>
        ))}
      </div>
    );
  }
}

export default withNamespaces()(PoetsList);
