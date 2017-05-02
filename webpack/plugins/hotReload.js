const {
  NoEmitOnErrorsPlugin,
  HotModuleReplacementPlugin,
} = require('webpack');

module.exports = (config) => {
  Object.keys(config.entry).forEach((point) => {
    if (Array.isArray(config.entry[point])) {
      config.entry[point] = [
        'react-hot-loader/patch',
        `webpack-hot-middleware/client?path=${config.output.publicPath}__webpack_hmr`,
        'webpack/hot/only-dev-server',
        ...config.entry[point],
      ];
    }
  });

  config.plugins = [
    ...config.plugins,
    new NoEmitOnErrorsPlugin(),
    new HotModuleReplacementPlugin(),
  ];

  return config;
};
