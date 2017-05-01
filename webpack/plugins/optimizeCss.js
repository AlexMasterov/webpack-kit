const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: require('../postcss/plugins/cssnano')(),
      canPrint: false,
    }),
  ];

  return config;
};
