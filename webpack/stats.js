const stats = {
  cached: true,
  cachedAssets: true,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  colors: true,
  entrypoints: false,
  errorDetails: true,
  errors: true,
  exclude: [],
  excludeModules: [],
  hash: false,
  maxModules: 0,
  modules: false,
  publicPath: false,
  reasons: false,
  source: false,
  timings: false,
  version: false
};

module.exports = (config) => {
  config.stats = Object.assign(config.stats, stats);
  return config;
};
