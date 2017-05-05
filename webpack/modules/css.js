const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { isDev } = require('../env');

const extractCSS = new ExtractTextPlugin({
  disable: isDev,
  allChunks: true,
  ignoreOrder: true,
  filename: 'css/styles-[contenthash:8].css',
});

const cssLoader = {
  loader: 'css-loader',
  options: {
    minimize: false,
    modules: true,
    importLoaders: 1,
    localIdentName: '[hash:base64:5]',
  },
};

const postcssLoader= ({ resource }) => {
  const isSugar = resource.toLowerCase().endsWith('.sss');
  return {
    loader: 'postcss-loader',
    options: {
      parser: isSugar ? 'sugarss' : false,
      config: __dirname + '/../postcss/postcss.config.js',
    },
  };
};

module.exports = (config) => {
  config.resolve.extensions = [
    ...config.resolve.extensions,
    '.css',
    '.sss',
  ];

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(css|sss)$/i,
      include: config.context,
      loader: extractCSS.extract({
        fallback: 'style-loader',
        use: [
          cssLoader,
          postcssLoader,
        ],
      }),
    },
  ];

  config.plugins = [
    ...config.plugins,
    extractCSS,
  ];

  return config;
};
