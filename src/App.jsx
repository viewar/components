import React, { PureComponent } from 'react';
import API from 'viewar-api';

// TODO: add routing for presenter
class App extends PureComponent {
  async componentDidMount() {
    window.api = await API.init();
  }

  render() {
    return (
      <div id="app_root">
        <h1>@viewar/components</h1>
      </div>
    );
  }
}

export default App;
