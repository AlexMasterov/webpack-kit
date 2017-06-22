const {
  optimize: { ModuleConcatenationPlugin },
} = require('webpack');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new ModuleConcatenationPlugin(),
  ];

  return config;
};
