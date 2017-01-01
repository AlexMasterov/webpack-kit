const HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();

module.exports = (config) => {
  const { name, version } = require(`${cwd}/package.json`);

  config.plugins = [
    ...config.plugins,
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: false,
      cashe: true,
      hash: true,
      chunks: 'all',
      chunksSortMode: 'dependency',
      excludeChunk: false,
      showErrors: true,
      inject: 'body',
      title: `${name} — ${version}`,
      filename: 'index.html',
      favicon: `${cwd}/webpack/server/templates/favicon.ico`,
      template: `${cwd}/webpack/server/templates/index.html`
    })
  ];

  return config;
};
