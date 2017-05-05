const { DefinePlugin } = require('webpack');
const { isDev } = require('../env');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: isDev,
    }),
  ];

  return config;
};
