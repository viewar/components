import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// this import triggers 'file-loader' to copy assets into /build of 'webpack-dev-server'
import LoadingGear from 'assets/viewar_loading_gear_red.svg'; // eslint-disable-line no-unused-vars
import Icon from 'components/Icon';

import styles from './LoadingState.scss';


const LoadingState = ({ progress, isVisible, isOverlay }) => {
  if (progress === false) {
    return (
      <div className={cx(styles.LoadingState, {
        [styles.isHidden]:  !isVisible,
        [styles.isOverlay]: isOverlay,
      })}
      >
        <Icon icon="refresh" className={styles.img} />
        <div className={styles.text}>Loading ...</div>
      </div>
    );
  }
  else {
    return (
      <div className={cx(styles.LoadingState, {
        [styles.isHidden]:  !isVisible,
        [styles.isOverlay]: isOverlay,
      })}
      >
        <div key="LoadingState.progressBar" className={styles.progressBar}>
          <div key="LoadingState.progress" className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }
};

LoadingState.propTypes = {
  progress:  PropTypes.bool,
  isVisible: PropTypes.bool,
  isOverlay: PropTypes.bool,
};

LoadingState.defaultProps = {
  progress:  false,
  isVisible: false,
  isOverlay: true,
};

export default LoadingState;
