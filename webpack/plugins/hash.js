const { NamedChunksPlugin } = require('webpack');
const { relative } = require('path');
const { isDev } = require('../env');

const ModuleNamePlugin = isDev
  ? require('webpack').NamedModulesPlugin
  : require('webpack').HashedModuleIdsPlugin;

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new NamedChunksPlugin((chunk) => {
      if (chunk.name) return chunk.name;
      return chunk
        .mapModules(({ context, request }) => relative(context, request))
        .join('_');
    }),
  ];

  return config;
};
