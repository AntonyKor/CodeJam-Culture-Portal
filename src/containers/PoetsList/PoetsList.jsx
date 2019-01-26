import React from 'react';
import { withNamespaces } from 'react-i18next';
import authors from 'src/data';
import PoetsListItem from 'src/components/PoetsListItem';
import styles from './PoetsList.scss';

const PoetsList = ({ t }) => {
  let key = 0;
  return (
    <div className={styles.wrapper}>
      <table>
        <tbody>
          <tr>
            <th />
            <th>{t('name-of-poet')}</th>
            <th>{t('place-of-birth')}</th>
          </tr>
          {authors.map((author) => {
            key += 1;
            return <PoetsListItem key={key} id={author.id} name={t(`name${author.id}`)} placeOfBirth={t(`placeOfBirth${author.id}`)} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default withNamespaces()(PoetsList);
