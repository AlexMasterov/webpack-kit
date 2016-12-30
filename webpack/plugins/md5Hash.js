const webpackMd5Hash = require('webpack-md5-hash');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new webpackMd5Hash()
  ];

  return config;
};
