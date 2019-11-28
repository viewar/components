import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import API from 'viewar-api';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import ComponentPresenter from './ComponentPresenter';
import styles from './App.scss';

// TODO: add routing for presenter
class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  state = {
    initiated: false,
  };

  async componentWillMount() {
    this.api = await API.init();

    window.api = this.api;
    this.setState({ initiated: true });
  }

  api = null;

  render() {
    const { props: { children }, state: { initiated }} = this;

    return (
      <div id="app_root" className={styles.wrapper}>
        <h1 id="app_headline">@viewar/components</h1>
        {children && <div id="component">{children}</div>}

        {initiated &&
          <Router hashType="slash">
            <Link to="/Button">Button</Link>{' - '}
            <Link to="/ButtonToggle">ButtonToggle</Link>{' - '}
            <Link to="/PropertyPicker">PropertyPicker</Link>{' - '}
            <Link to="/Slider">Slider</Link>

            <Switch>
              <Route
                // eslint-disable-next-line react/jsx-no-bind
                path="/:componentName" render={(routeProps) => {
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  return <ComponentPresenter {...this.props} {...routeProps} api={this.api} />;
                }}
              />
            </Switch>
          </Router> ||
          <div>Initializing ViewarAPI ...</div>}
      </div>
    );
  }
}

export default App;
