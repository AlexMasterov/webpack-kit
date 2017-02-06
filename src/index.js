import React from 'react';
import render from './render';
import App from './containers/App';

import './styles';

const rootElement = document.getElementById('root');
render(
  App,
  rootElement
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const newApp = require('./containers/App').default;
    render(newApp, rootElement);
  });
}
