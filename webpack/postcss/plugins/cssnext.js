const cssnext = require('postcss-cssnext');

const defaultConfig = {
  browsers: 'last 2 versions',
  features: {
    customProperties: {
      variables: {
        maxWidth: '60rem',
        colorText: '#555'
      }
    }
  }
};

module.exports = (newConfig = {}) => {
  return cssnext(
    Object.assign(defaultConfig, newConfig)
  );
};
