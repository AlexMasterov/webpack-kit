const WebpackChunkHash = require('webpack-chunk-hash');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = (config) => {
  const ModuleNamePlugin = IS_DEV
    ? require('webpack').NamedModulesPlugin
    : require('webpack').HashedModuleIdsPlugin;

  config.plugins = [
    ...config.plugins,
    new ModuleNamePlugin(),
    new WebpackChunkHash(),
  ];

  return config;
};
