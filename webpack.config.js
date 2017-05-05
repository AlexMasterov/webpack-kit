const { resolve } = require('path');
const { isProd, isDev } = require('./webpack/env');

let config = {
  devtool: 'cheap-module-eval-source-map',

  cache: true,
  performance: {
    assetFilter: (assetFilename) => !(/\.map$|^favicon\./.test(assetFilename)),
  },

  context: resolve(__dirname, 'src'),
  entry: {
    bundle: [
      './index.js',
    ],
  },

  output: {
    pathinfo: isDev,
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

  plugins: [],
  module: {
    rules: [],
  },
};

// Context
config = require('./webpack/stats')(config);
config = require('./webpack/node')(config);

// Modules
config = require('./webpack/modules/noParse')(config);
config = require('./webpack/modules/babel')(config);
config = require('./webpack/modules/cssSugar')(config);
config = require('./webpack/modules/urlFont')(config);
config = require('./webpack/modules/urlImage')(config);
config = require('./webpack/modules/urlVideo')(config);

// Plugins
config = require('./webpack/plugins/define')(config);
config = require('./webpack/plugins/hash')(config);

if (isProd) {
  config.devtool = 'source-map';

  // Plugins
  config = require('./webpack/plugins/clean')(config);
  config = require('./webpack/plugins/manifest')(config);
  config = require('./webpack/plugins/commonsChunk')(config);
  config = require('./webpack/plugins/uglify')(config);
  config = require('./webpack/plugins/optimizeCss')(config);
}

module.exports = config;
