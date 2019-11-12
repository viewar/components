import React from 'react';
import cx from 'classnames';
import { SceneStore } from 'app/store';

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

export default Overlay;
