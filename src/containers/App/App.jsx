import React from 'react';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import HeaderBar from '../../components/HeaderBar';
import styles from './App.scss';

class App extends React.Component {
  changeLanguage = ({ target: { value } }) => {
    const { i18n } = this.props;
    i18n.changeLanguage(value);
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.wrapper}>
        <HeaderBar changeLanguage={this.changeLanguage} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func,
  }).isRequired,
};

export default withNamespaces()(App);
