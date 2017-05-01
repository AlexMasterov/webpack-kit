const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new ManifestPlugin({
      basePath: '',
      publicPath: config.output.publicPath,
      fileName: 'assets.json',
    }),
  ];

  return config;
};
