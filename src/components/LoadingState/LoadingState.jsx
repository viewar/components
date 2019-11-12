import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// TODO: copy assets on build or fix file-loader
// this import triggers 'file-loader' to copy assets into /build of 'webpack-dev-server'
import LoadingGear from 'assets/viewar_loading_gear_red.svg'; // eslint-disable-line no-unused-vars

import styles from './LoadingState.scss';


const LoadingState = ({ isVisible }) => {
  return (
    <div className={cx(styles.LoadingState, {
      [styles.isHidden]: !isVisible,
    })}
    >
      <div className={styles.img}>
        {/* LOADING IMAGE addd by CSS background */}
      </div>
      <div className={styles.text}>Loading ...</div>
    </div>
  );
};

LoadingState.propTypes = {
  isVisible: PropTypes.bool,
};

LoadingState.defaultProps = {
  isVisible: false,
};

export default LoadingState;
