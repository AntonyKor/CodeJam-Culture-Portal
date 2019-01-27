import React from 'react';
import { withNamespaces } from 'react-i18next';
import HeaderBar from '../../components/HeaderBar';
import styles from './App.scss';

class App extends React.Component {
  changeLanguage = ({ target: { value } }) => {
    this.props.i18n.changeLanguage(value);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <HeaderBar changeLanguage={this.changeLanguage} />
        {this.props.children}
      </div>
    );
  }
}

export default withNamespaces()(App);