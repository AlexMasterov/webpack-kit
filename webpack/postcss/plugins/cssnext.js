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

module.exports = (config) => {
  return Object.assign({}, defaultConfig, config);
};
