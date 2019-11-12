import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('app-root') || document.getElementById('app');
const render = (Component) => {
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDOM.render(<Component />, rootElement);
};

const App = () => (
  <div id="app_wrapper">
    <h1>@viewar/components</h1>
  </div>
);

render(App);

if (module.hot) {
  module.hot.accept(App, () => {
    render(App);
  });
}
