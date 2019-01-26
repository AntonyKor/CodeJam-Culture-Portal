import React from 'react';
import { withNamespaces } from 'react-i18next';
import styles from './Poet.scss';
import authors from 'src/data';

class Poet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      author: authors.find(author => author.id === props.match.params.id),
      photo: null
    };
  }

  componentDidMount () {
    this._isMounted = true
    import(`src/images/photo/${this.state.author.photo}`).then(img => this._isMounted && this.setState({ photo: img.default }));
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { t, match } = this.props;
    return (
      <div className={styles.wrapper}>
        {this.state.photo && <img src={this.state.photo} />}
        {t('hello')} from Poet. Poet id is: {match.params.id}
      </div>
    );
  }
}

export default withNamespaces()(Poet);
