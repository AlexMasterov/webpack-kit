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

function isSugar({ resource }) {
  return resource &&
    resource.match(/\.sss$/);
}

const postcssLoader= (module) => {
  return {
    loader: 'postcss-loader',
    options: {
      parser: isSugar(module) ? 'sugarss' : false,
      config: require.resolve('../postcss/postcss.config.js'),
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
