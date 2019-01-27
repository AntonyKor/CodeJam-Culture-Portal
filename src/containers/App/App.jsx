import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import HeaderBar from '../../components/HeaderBar';
import styles from './App.scss';

const App = ({ children }) => (
  <div className={styles.wrapper}>
    <HeaderBar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withNamespaces()(App);
