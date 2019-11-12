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
const Overlay = ({ isOpen, content, onClose }) => (
  <div id="Overlay" className={cx(styles.Overlay, { [styles.isOpen]: isOpen })}>
    <div className={styles.close} onClick={onClose} />
    <div className={styles.content}>
      {content || 'CONTENT'}
    </div>
  </div>
);

Overlay.propTypes = {
  content: PropTypes.node.isRequired,
  isOpen:  PropTypes.bool,
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  isOpen:  false,
  onClose: () => {},
};

export default Overlay;
