import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App';

const App = () => (
  <div className={styles.app}>
    <h2>Webpack Kit</h2>
  </div>
);

export default hot(module)(App);
