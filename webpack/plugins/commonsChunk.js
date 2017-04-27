const {
  optimize: { CommonsChunkPlugin },
} = require('webpack');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new CommonsChunkPlugin({
      name: 'manifest',
    }),
  ];

  return config;
};
