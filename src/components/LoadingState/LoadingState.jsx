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
        <div key="LoadingState.progressBar" style={{ width: '100%', height: '1rem', border: '1px solid green' }}>
          <div key="LoadingState.progressBarInner" style={{ backgroundColor: 'red', width: `${progress}%`, height: '1rem' }} />
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
