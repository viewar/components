import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('app-root') || document.getElementById('app');
const render = (Component) => {
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDOM.render(<Component />, rootElement);
};

render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}
