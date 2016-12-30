const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';

let extractCSS = new ExtractTextPlugin({
  disable: IS_DEV,
  allChunks: true,
  filename: 'css/styles-[contenthash:8].css'
});

let cssLoader = {
  loader: 'css-loader',
  query: {
    modules: true,
    importLoaders: true,
    localIdentName: '[hash:base64:5]'
  }
};

let postcssLoader = {
  loader: 'postcss-loader',
  query: {
    config: __dirname + '/../postcss/postcss.config.js'
  }
};

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    extractCSS
  ];

  config.resolve.extensions = [
    ...config.resolve.extensions,
    '.sss'
  ];

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.sss$/i,
      include: config.context,
      loader: extractCSS.extract({
        fallbackLoader: 'style-loader',
        loader: [
          cssLoader,
          postcssLoader
        ]
      })
    }
  ];

  return config;
};
