const { HashedModuleIdsPlugin } = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new HashedModuleIdsPlugin(),
    new WebpackChunkHash()
  ];

  return config;
};
