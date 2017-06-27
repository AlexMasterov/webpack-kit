const KB = 1024;

const performance = {
  assetFilter: (assetFilename) => !(/\.map$|^favicon\./.test(assetFilename)),
  hints: 'warning',
  maxAssetSize: KB * 300,
  maxEntrypointSize: KB * 300,
};

module.exports = (config) => {
  config.stats = Object.assign({}, config.stats, { performance: true });
  config.performance = Object.assign({}, config.performance, performance);

  return config;
};
