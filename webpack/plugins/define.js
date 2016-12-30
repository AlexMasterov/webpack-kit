const { DefinePlugin } = require('webpack');
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: IS_DEV
    })
  ];

  return config;
};
