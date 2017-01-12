import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './styles';

const render = (Component) => {
  if (__DEV__) {
    const AppContainer = require('react-hot-loader').AppContainer;
    const Component = () => <AppContainer><Component /></AppContainer>;
  }
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const newApp = require('./containers/App').default;
    render(newApp);
  });
}
