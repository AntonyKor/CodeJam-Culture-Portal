import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

const SearchInput = ({ searchHeandler, t }) => (
  <input type="text" onChange={e => searchHeandler(e.target.value)} placeholder={t('search-placeholder')} />
);

SearchInput.propTypes = {
  searchHeandler: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};


export default withNamespaces()(SearchInput);
