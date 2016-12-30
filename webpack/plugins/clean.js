const CleanPlugin = require('clean-webpack-plugin');

const cleanDirs = ['css', 'js'];

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new CleanPlugin(cleanDirs, {
      root: config.output.path,
      verbose: false,
      dry: false
    })
  ];

  return config;
};
