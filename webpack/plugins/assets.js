const AssetsPlugin = require('assets-webpack-plugin');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new AssetsPlugin({
      filename: `${config.output.path}/assets.json`,
      fullPath: false,
      prettyPrint: true,
    }),
  ];

  return config;
};
