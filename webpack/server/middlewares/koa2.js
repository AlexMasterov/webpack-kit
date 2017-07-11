const webpack = require('webpack');
const koaMiddleware = require('koa-webpack');
const cwd = process.cwd();

// Configure Hot Reload
const configs = [
  'plugins/html',
  'plugins/hotReload',
];

const config = configs.reduce(
  (config, filepath) => require(`${cwd}/webpack/${filepath}`)(config),
  require(`${cwd}/webpack.config`)
);

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
