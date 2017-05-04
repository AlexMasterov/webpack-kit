const {
  NoEmitOnErrorsPlugin,
  HotModuleReplacementPlugin,
} = require('webpack');

module.exports = (config) => {
  const hotMiddlewareOptions = [
    `path=${config.output.publicPath}__webpack_hmr`,
    'reload=true',
    'noInfo=true',
  ].join('&');

  Object.keys(config.entry).forEach((point) => {
    if (Array.isArray(config.entry[point])) {
      config.entry[point] = [
        'react-hot-loader/patch',
        `webpack-hot-middleware/client?${hotMiddlewareOptions}`,
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
