const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: false,
      cashe: true,
      inject: 'body',
      hash: true,
      chunks: [
        'bundle',
        'vendor'
      ],
      title: 'App',
      filename: 'index.html',
      favicon: `${__dirname}/../server/templates/favicon.ico`,
      template: `${__dirname}/../server/templates/index.html`,
      minify: {
        removeComments: false,
        collapseWhitespace: false
      }
    })
  ];

  return config;
};
