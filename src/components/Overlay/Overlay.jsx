import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Overlay.scss';

/**
 * @function Overlay
 * @component
 * @description global page overlay, controlled by SceneStore
 * @uses SceneStore.state.overlay
 * @returns {JSX} <Overlay /> component
 */
const Overlay = ({
  isOpen, content, onClose, className,
}) => (
  <div id="Overlay" className={cx(styles.Overlay, { [styles.isOpen]: isOpen }, className)}>
    <div className={styles.close} onClick={onClose} />
    <div className={styles.content}>
      {content || 'CONTENT'}
    </div>
  </div>
);

Overlay.propTypes = {
  content:   PropTypes.node.isRequired,
  isOpen:    PropTypes.bool,
  onClose:   PropTypes.func,
  className: PropTypes.string,
};

Overlay.defaultProps = {
  isOpen:    false,
  onClose:   () => {},
  className: '',
};

export default Overlay;
