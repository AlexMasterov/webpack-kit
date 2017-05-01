const { resolve } = require('path');

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = process.env.NODE_ENV === 'development';

// See: https://github.com/webpack/loader-utils/issues/56
process.noDeprecation = true;

let config = {
  devtool: 'cheap-module-eval-source-map',

  cache: true,
  performance: {
    hints: false,
  },

  context: resolve(__dirname, 'src'),

  entry: {
    bundle: [
      './index.js',
    ],
  },

  output: {
    pathinfo: IS_DEV,
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash:8].js',
    chunkFilename: 'js/[name]-[chunkhash:8].chunk.js',
  },

  resolve: {
    alias: {},
    extensions: [],
    modules: [
      resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  module: {
    rules: [],
  },

  plugins: [],
};

// Context
config = require('./webpack/stats')(config);
config = require('./webpack/node')(config);

// Modules
config = require('./webpack/modules/noParse')(config);
config = require('./webpack/modules/babel')(config);
config = require('./webpack/modules/sugar')(config);
config = require('./webpack/modules/urlImages')(config);

// Plugins
config = require('./webpack/plugins/define')(config);
config = require('./webpack/plugins/hash')(config);

if (IS_PROD) {
  config.devtool = false;

  // Plugins
  config = require('./webpack/plugins/clean')(config);
  config = require('./webpack/plugins/manifest')(config);
  config = require('./webpack/plugins/uglify')(config);
  config = require('./webpack/plugins/optimizeCss')(config);
}

module.exports = config;
