import React, { PureComponent } from 'react';
import API from 'viewar-api';

// TODO: add routing for presenter
class App extends PureComponent {
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
    return (
      <div id="app_root">
        <h1 id="app_headline">@viewar/components</h1>
      </div>
    );
  }
}

export default App;
