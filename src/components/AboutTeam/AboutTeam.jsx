import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './AboutTeam.scss';

const Aboutteam = ({ t }) => (

      <div className={styles.wrapper}>
        <h2>{t('devTeam')}</h2>

        <div className={styles.devTeam}>
          <div className={styles.devCard}>
            <img src={require('src/images/team/AntonyKor.png')} width="100%" />
            <ul className={styles.devName}>
              <li>antonykor</li>
              <li>Anton Kalodzich</li>
            </ul>
          </div>

          <div className={styles.devCard}>
            <img src={require('src/images/team/gleb7raul.png')} width="100%" />
            <ul className={styles.devName}>
              <li>gleb7raul</li>
              <li>Hleb Nebiadukhin</li>
            </ul>
          </div>

          <div className={styles.devCard}>
            <img src={require('src/images/team/vvikota.jpg')} width="100%" />
            <ul className={styles.devName}>
              <li>vvikota</li>
              <li>Viktar Rymsha</li>
            </ul>
          </div>

          <div className={styles.devCard}>
            <img src={require('src/images/team/NoviceBlunderer.png')} width="100%" />
            <ul className={styles.devName}>
              <li>noviceblunderer</li>
              <li>Kanstantsin Piatrou</li>
            </ul>
          </div>

        </div>
      </div>
    );
    
    Aboutteam.propTypes = {
      t: PropTypes.func.isRequired,
    };    

export default withNamespaces()(Aboutteam);
