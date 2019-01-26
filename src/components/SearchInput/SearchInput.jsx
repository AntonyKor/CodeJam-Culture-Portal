import React from 'react';
import { withNamespaces } from 'react-i18next';

const SearchInput = ({ searchHeandler, t }) => (
  <input type="text" onChange={e => searchHeandler(e.target.value)} placeholder={t('search-placeholder')} />
);

export default withNamespaces()(SearchInput);
