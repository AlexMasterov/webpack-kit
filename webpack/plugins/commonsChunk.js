const {
  optimize: { CommonsChunkPlugin }
} = require('webpack');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    })
  ];

  return config;
};
