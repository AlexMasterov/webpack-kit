const stats = {
  assets: true,
  assetsSort: 'size',
  cached: true,
  children: false,
  chunkModules: false,
  chunkOrigins: false,
  chunks: true,
  chunksSort: 'size',
  colors: true,
  errorDetails: true,
  errors: true,
  exclude: [],
  excludeModules: [],
  hash: false,
  maxModules: 8,
  modules: true,
  modulesSort: 'size',
  publicPath: false,
  reasons: true,
  source: true,
  timings: false,
  version: false,
  warnings: true
};

module.exports = (config) => {
  config.stats = Object.assign({}, config.stats, stats);
  return config;
};
