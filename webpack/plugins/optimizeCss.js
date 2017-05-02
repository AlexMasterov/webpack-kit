const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const processor = require('cssnano');
const processorOptions = require('../postcss/plugins/cssnano')();

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: processor,
      cssProcessorOptions: processorOptions,
      canPrint: false,
    }),
  ];

  return config;
};
