const webpack = require('webpack');
const koaMiddleware = require('koa-webpack');
const CWD = process.cwd();

let config = require(`${CWD}/webpack.config`);

// Configure Hot Reload
config = require(`${CWD}/webpack/plugins/hotReload`)(config);
config = require(`${CWD}/webpack/plugins/html`)(config);

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
  hot: hotConfig
});
