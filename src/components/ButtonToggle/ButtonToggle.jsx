import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './ButtonToggle.scss';

/**
 * ButtonToggle
 * Toggle Switch Button
 *
 * @component
 * @example
 * ```jsx
 *  <ButtonToggle label={'Turn me on'} initialState={{checked: false}} />
 * ```
 */
class ButtonToggle extends PureComponent {
  static propTypes = {
    label:        PropTypes.string.isRequired,
    checked:      PropTypes.bool,
    onChange:     PropTypes.func,
    initialState: PropTypes.shape({
      checked: PropTypes.bool.isRequired,
    }),
  };

  static defaultProps= {
    checked:      null,
    onChange:     () => {},
    initialState: { checked: true },
  };

  constructor(props) {
    super(props);
    const { checked, initialState } = props;

    this.isControlled = checked != null;

    if (!this.isControlled) {
      this.state = initialState;
    }
  }

  handleOnChange = ({ currentTarget: { checked }}) => {
    if (!this.isControlled) {
      this.setState({ checked });
    }

    this.props.onChange(checked);
  }

  render() {
    const { label } = this.props;

    const checked = this.isControlled
      ? this.props.checked
      : this.state.checked
    ;

    return (
      <>
        <div styles={styles.ButtonToggle}>
          <label className={styles.switch}>
            <input
              id="animationName0"
              type="checkbox"
              checked={checked}
              onChange={this.handleOnChange}
            />
            <span className={styles.slider + ' ' + styles.round} />
          </label>
          <label className={styles.ToggleName}>
            {label}
          </label>
        </div>
      </>
    );
  }
}

export default ButtonToggle;
