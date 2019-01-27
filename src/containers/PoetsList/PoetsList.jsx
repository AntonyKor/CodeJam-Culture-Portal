import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import authors from 'src/data';
import SearchInput from 'src/components/SearchInput';
import PoetsTable from 'src/components/PoetsTable';
import SortSelect from 'src/components/SortSelect';

class PoetsList extends React.Component {
  state = {
    authorsNow: authors.sort((a, b) => a.id - b.id),
    sortBy: 'id',
  }

  searchHeandler(text) {
    const search = text.toLowerCase();
    const { t } = this.props;
    const { sortBy } = this.state;

    this.setState({
      sortBy,
      authorsNow: authors
        .filter(author => t(`placeOfBirth${author.id}`).toLowerCase().includes(search) || t(`name${author.id}`).toLowerCase().includes(search))
        .sort((a, b) => {
          if (sortBy === 'id') return a.id - b.id;
          return t(sortBy + a.id).localeCompare(t(sortBy + b.id));
        }),
    });
  }

  sortHeandler(sortBy) {
    const { t } = this.props;
    const { authorsNow } = this.state;

    this.setState({
      sortBy,
      authorsNow: authorsNow
        .sort((a, b) => {
          if (sortBy === 'id') return a.id - b.id;
          return t(sortBy + a.id).localeCompare(t(sortBy + b.id));
        }),
    });
  }

  render() {
    const { authorsNow } = this.state;

    return (
      <div>
        <SearchInput searchHeandler={(...args) => this.searchHeandler(...args)} />
        <SortSelect sortHeandler={sortBy => this.sortHeandler(sortBy)} />
        <PoetsTable
          authors={authorsNow.map(author => author.id)}
        />
      </div>
    );
  }
}

PoetsList.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(PoetsList);
