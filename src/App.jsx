import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import API from 'viewar-api';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Icon from 'components/Icon';

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

  async componentDidMount() {
    try {
      window.api = await API.init();
      // eslint-disable-line indent
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[Viewar API] Error: ', err);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div id="app_root" className={styles.wrapper}>
        <h1 id="app_headline">@viewar/components</h1>
        {children && <div id="component">{children}</div>}
        <Icon color="red" icon="folder" />
        <Router>
          <Link to="/Button">Button</Link>
          {' - '}
          <Link to="/ButtonToggle">ButtonToggle</Link>
          {' - '}
          <Link to="/Slider">Slider</Link>

          <Switch>
            <Route path="/:componentName" component={ComponentPresenter} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
