const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';

const extractCSS = new ExtractTextPlugin({
  disable: IS_DEV,
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

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    parser: 'sugarss',
    config: __dirname + '/../postcss/postcss.config.js',
  },
};

module.exports = (config) => {
  config.resolve.extensions = [
    ...config.resolve.extensions,
    '.sss',
  ];

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.sss$/i,
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
