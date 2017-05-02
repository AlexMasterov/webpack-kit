const defaultConfig = {
  reset: {
    margin: 0,
    padding: 0,
    borderRadius: 0,
    boxSizing: 'border-box',
  },
};

module.exports = (config) => {
  return Object.assign({}, defaultConfig, config);
};
