const { resolve } = require('path');
const IS_PROD = process.env.NODE_ENV === 'production';

let config = {
  devtool: 'cheap-module-eval-source-map',
  cache: true,

  stats: {},
  performance: {
    hints: false
  },

  context: resolve(__dirname, 'src'),

  entry: {
    bundle: [
      './index.js'
    ]
  },

  output: {
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js'
  },

  resolve: {
    alias: {},
    extensions: [],
    modules: [
      resolve(__dirname, 'src'),
      'node_modules'
    ]
  },

  module: {
    rules: [],
    noParse: []
  },

  plugins: []
};

// Context
config = require('./webpack/stats')(config);

// Modules
config = require('./webpack/modules/babel')(config);
config = require('./webpack/modules/sugar')(config);
config = require('./webpack/modules/image')(config);
config = require('./webpack/modules/noParse')(config);

// Plugins
config = require('./webpack/plugins/define')(config);
config = require('./webpack/plugins/md5Hash')(config);

if (IS_PROD) {
  config.devtool = 'source-map';
  config = require('./webpack/plugins/uglify')(config);
  config = require('./webpack/plugins/assets')(config);
  config = require('./webpack/plugins/clean')(config);
}

module.exports = config;
