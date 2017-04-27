const cssnext = require('postcss-cssnext');

const defaultConfig = {
  features: {
    customProperties: {
      variables: {
        maxWidth: '60rem',
        colorText: '#555',
      },
    },
  },
};

module.exports = (newConfig = {}) => {
  return cssnext(
    Object.assign(defaultConfig, newConfig)
  );
};
