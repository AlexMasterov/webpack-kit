const webpack = require('webpack');
const koaMiddleware = require('koa-webpack');

const cwd = process.cwd();

let config = require(`${cwd}/webpack.config`);

// Configure Hot Reload
config = require(`${cwd}/webpack/plugins/hotReload`)(config);
config = require(`${cwd}/webpack/plugins/html`)(config);

// Configure Webpack
config.output.filename = config.output.filename.replace('chunkhash', 'hash');

// Webpack compilation
const compiler = webpack(config);

// Configure Koa middleware
const devConfig = require('../configs/devServer')(config);
const hotConfig = require('../configs/hotServer')(config);

module.exports = koaMiddleware({
  compiler: compiler,
  dev: devConfig,
  hot: hotConfig,
});
