import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import API from 'viewar-api';

// TODO: add routing for presenter
class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  async componentDidMount() {
    try {
      window.api = await API.init();
      // eslint-disable-line indent
    }
 catch (err) {
      console.warn('[Viewar API] Error: ', err);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div id="app_root">
        <h1 id="app_headline">@viewar/components</h1>
        {children && <div id="component">{children}</div>}
      </div>
    );
  }
}

export default App;
