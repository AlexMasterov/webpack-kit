const autoreset = require('postcss-autoreset');

const defaultConfig = {
  reset: {
    margin: 0,
    padding: 0,
    borderRadius: 0,
    boxSizing: 'border-box'
  }
};

module.exports = (newConfig = {}) => {
  return autoreset(
    Object.assign(defaultConfig, newConfig)
  );
};
