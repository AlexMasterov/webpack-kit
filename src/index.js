import React from 'react';
import render from './render';
import App from './containers/App';

import './styles';

const Container = document.getElementById('root');

render(<App />, Container);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(<App />, Container);
  });
}
