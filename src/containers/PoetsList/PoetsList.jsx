import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import authors from 'src/data';
import PoetsListItem from 'src/components/PoetsListItem';
import SearchInput from 'src/components/SearchInput';
import styles from './PoetsList.scss';

const authorsLittle = authors.map(author => author.id);

class PoetsList extends React.Component {
  state = {
    authorsNow: authorsLittle,
  }

  searchHeandler(text) {
    const search = text.toLowerCase();
    const { t } = this.props;

    this.setState({
      authorsNow: authorsLittle
        .filter(id => t(`placeOfBirth${id}`).toLowerCase().includes(search) || t(`name${id}`).toLowerCase().includes(search)),
    });
  }

  render() {
    const { t } = this.props;

    let key = 0;
    const { authorsNow } = this.state;
    return (
      <div className={styles.wrapper}>
        <SearchInput searchHeandler={(...args) => this.searchHeandler(...args)} />
        <table>
          <tbody>
            <tr>
              <th />
              <th>{t('name-of-poet')}</th>
              <th>{t('place-of-birth')}</th>
            </tr>
            {authorsNow.map((id) => {
              key += 1;
              return <PoetsListItem key={key} id={id} name={t(`name${id}`)} placeOfBirth={t(`placeOfBirth${id}`)} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

PoetsList.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(PoetsList);
