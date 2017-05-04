const defaultConfig = {
  add: true,
  supports: true,
  flexbox: true,
  grid: true,
  remove: true,
};

module.exports = (config) => {
  return Object.assign({}, defaultConfig, config);
};
