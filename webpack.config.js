const { resolve } = require('path');
const { isProd, isDev } = require('./webpack/env');

const devEnv = [
  'stats',
  'modules/noParse',
  'modules/babel',
  'modules/css',
  'modules/urlFont',
  'modules/urlImage',
  'modules/urlVideo',
  'plugins/define',
  'plugins/hash',
  'plugins/commonsChunk',
];

const prodEnv = [
  'perf',
  'node',
  'plugins/clean',
  'plugins/manifest',
  'plugins/moduleConcat',
  'plugins/uglify',
  'plugins/optimizeCss',
];

const config = {
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',

  cache: true,
  performance: {
    hints: false,
  },

  context: resolve(__dirname, 'src'),
  entry: {
    bundle: [
      './index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    pathinfo: isDev,
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash:8].js',
    chunkFilename: 'js/[name]-[chunkhash:8].chunk.js',
    devtoolModuleFilenameTemplate: ({ absoluteResourcePath }) =>
      resolve(absoluteResourcePath).replace(/\\/g, '/'),
  },

  resolve: {
    cacheWithContext: true,
    alias: {},
    extensions: [],
    modules: [
      resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  plugins: [],
  module: {
    strictExportPresence: true,
    rules: [],
  },
};

module.exports = devEnv
  .concat(isProd ? prodEnv : [])
  .reduce(
    (config, filepath) => require(`./webpack/${filepath}`)(config),
    config
  );
