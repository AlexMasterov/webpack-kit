const WebpackChunkHash = require('webpack-chunk-hash');
const { isDev } = require('../env');

module.exports = (config) => {
  const ModuleNamePlugin = isDev
    ? require('webpack').NamedModulesPlugin
    : require('webpack').HashedModuleIdsPlugin;

  config.plugins = [
    ...config.plugins,
    new ModuleNamePlugin(),
    new WebpackChunkHash(),
  ];

  return config;
};
