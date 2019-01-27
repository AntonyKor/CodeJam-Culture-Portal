import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import authors from 'src/data';
import SearchInput from 'src/components/SearchInput';
import PoetsTable from 'src/components/PoetsTable';

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
    const { authorsNow } = this.state;
    return (
      <div>
        <SearchInput searchHeandler={(...args) => this.searchHeandler(...args)} />
        <PoetsTable authors={authorsNow} />
      </div>
    );
  }
}

PoetsList.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(PoetsList);
