import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// this import triggers 'file-loader' to copy assets into /build of 'webpack-dev-server'
import LoadingGear from 'assets/viewar_loading_gear_red.svg'; // eslint-disable-line no-unused-vars
import { Icon } from 'components';

import styles from './LoadingState.scss';

class LoadingState extends PureComponent {
  static propTypes = {
    label:    PropTypes.string,
    progress:     PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([ false ]),
    ]),
    isVisible:  PropTypes.bool,
    isCanceled: PropTypes.bool,
    isOverlay:  PropTypes.bool,
    onRestart:  PropTypes.func,
    onCancel:   PropTypes.func,
  };

  static defaultProps = {
    label:      '',
    progress:   false,
    isVisible:  true,
    isCanceled: false,
    isOverlay:  false,
    onRestart:  () => {},
    onCancel:   () => {},
  };

  onCancel = () => {
    this.props.onCancel();
  }

  onRestart = () => {
    this.props.onRestart();
  }

  render() {
    const { progress, label, isCanceled, isVisible, isOverlay } = this.props;

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

          {label && <div key="Loadingstate.label" className={styles.label}>{label}</div>}

          {(!isCanceled && progress !== 100) &&
            <div key="LoadingState.cancel" className={styles.cancel} onClick={this.onCancel} role="button">Cancel</div>}
          {(isCanceled) &&
            <div key="LoadingState.restart" className={styles.restart} onClick={this.onRestart} role="button">Restart</div>}
        </div>
      );
    }
  }
}

export default LoadingState;
