import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Test extends PureComponent {
  static propTypes = {
    test: PropTypes.string,
  };

  static defaultProps = {
    test: '',
  }

  render() {
    const { test } = this.props;

    return <div id="Test">{test}</div>;
  }
}

export default Test;
