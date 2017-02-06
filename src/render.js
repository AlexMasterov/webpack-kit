import React from 'react';
import { render as renderApp } from 'react-dom';

const render = (Component, Container) => {
  if (module.hot) {
    const AppContainer = require('react-hot-loader').AppContainer;
    const Component = () => <AppContainer><Component /></AppContainer>;
  }

  renderApp(<Component />, Container);
};

export default render;
