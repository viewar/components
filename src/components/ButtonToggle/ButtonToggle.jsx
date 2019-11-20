import PropTypes from 'prop-types';
import React from 'react';

import styles from './ButtonToggle.scss';

const ButtonToggle = ({ label, checked, onToggle }) => (
  <div styles={styles.ButtonToggle} onClick={onToggle}>
    <label className={styles.switch}>
      <input
        id="animationName0"
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <span className={styles.slider + ' ' + styles.round} />
    </label>
    <label className={styles.ToggleName}>
      {label}
    </label>
  </div>
);

ButtonToggle.propTypes = {
  label:    PropTypes.string.isRequired,
  checked:  PropTypes.bool,
  onToggle: PropTypes.func,
};

ButtonToggle.defaultProps = {
  checked:  false,
  onToggle: () => {},
};

export default ButtonToggle;
