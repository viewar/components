import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.scss';

const NOOP = () => {};

class Textfield extends PureComponent {
  static propTypes = {
    initialValue: PropTypes.string,
    onChange:     PropTypes.func,
  };

  static defaultProps = {
    initialValue: 0,
    onChange:     NOOP,
  }

  state = {
    value: this.props.initialValue,
  }

  handleChange = () => ({ currentTarget: { value }}) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    return (
      <div className={styles.Textfield}>
        <input
          type="text"
          className={styles.input}
          value={this.state.value}
          onChange={this.handleChange()}
        />
      </div>
    );
  }
}

export default Textfield;
