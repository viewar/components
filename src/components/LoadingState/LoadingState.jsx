import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Overlay from '../Overlay/Overlay';
import Icon from '../Icon/Icon';
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
    onClose:    PropTypes.func,
  };

  static defaultProps = {
    label:      '',
    progress:   false,
    isVisible:  true,
    isCanceled: false,
    isOverlay:  true,
    onRestart:  () => {},
    onCancel:   () => {},
    onClose:    () => {},
  };

  onClose = () => {
    this.props.onClose();
  }

  onCancel = () => {
    this.props.onCancel();
  }

  onRestart = () => {
    this.props.onRestart();
  }

  render() {
    const { progress, label, isCanceled, isVisible, isOverlay } = this.props;
    let loadingStateComponent = '';

    if (progress === false) {
      loadingStateComponent = (
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
      loadingStateComponent = (
        <div className={cx(styles.LoadingState, {
          [styles.isHidden]: !isVisible,
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

    return !isOverlay
      ? loadingStateComponent
      : (
        <Overlay
          isOpen={isVisible}
          content={loadingStateComponent}
          onClose={this.onClose}
        />
      );
  }
}

export default LoadingState;
