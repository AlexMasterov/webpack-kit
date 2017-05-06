const {
  optimize: { CommonsChunkPlugin },
} = require('webpack');

function isVendor({ resource }) {
  return resource &&
    resource.indexOf('node_modules') >= 0 &&
    resource.match(/\.js$/);
}

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => isVendor(module),
    }),
  ];

  return config;
};
