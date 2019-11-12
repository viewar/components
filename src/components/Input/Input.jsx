import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Input.scss';

Input.propTypes = {
  value:      PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label:       PropTypes.string,
  className:   PropTypes.string,
  onChange:    PropTypes.func,
  nativeProps: PropTypes.shape({
    type: PropTypes.string,
    step: PropTypes.oneOf([ 'string', 'number' ]),
  }),
};

Input.defaultProps = {
  value:       '',
  label:       '',
  className:   '',
  onChange:     () => {},
  nativeProps: {
    type: 'textfield',
  },
};

const handleChange = (onChange) => ({ currentTarget: { value }}) => {
  onChange(value);
};

function Input({
  value, label, onChange, nativeProps, className,
}) {
  // extend defaultProps.nativeProps
  nativeProps = Object.assign({}, Input.defaultProps.nativeProps, nativeProps);

  return (
    <div className={cx(styles.Input, className)}>
      {label && <div className={styles.label}>{label}:</div>}
      <div className={styles.inputWrapper}>
        <input
          value={value}
          className={styles.input}
          onChange={handleChange(onChange)}
          {...nativeProps}
        />
      </div>
    </div>
  );
}

export default Input;
