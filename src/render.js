import React from 'react';
import { render as domRender } from 'react-dom';

const render = (Component, Container) => {
  if (module.hot) {
    const AppContainer = require('react-hot-loader').AppContainer;
    const Component = () => <AppContainer><Component /></AppContainer>;
  }

  domRender(Component, Container);
};

export default render;
