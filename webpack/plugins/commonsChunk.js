const {
  optimize: { CommonsChunkPlugin },
} = require('webpack');

function isCss({ resource }) {
  return resource &&
    resource.match(/\.(css|sss)$/);
}

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
      minChunks: (module) => {
        if (isCss(module)) return false;
        return isVendor(module);
      },
    }),
    new CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity,
    }),
  ];

  return config;
};
