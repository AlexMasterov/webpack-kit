function hasTrailingSlash(string) {
  return (string.length > 1 && string.endsWith('/'));
}

function normalizePath(string) {
  return hasTrailingSlash(string) ? string.slice(0, -1) : string;
}

module.exports = (config) => {
  const publicPath = normalizePath(config.output.publicPath);

  return {
    contentBase: config.output.path,
    publicPath: publicPath,
    hot: true,
    https: true,
    compress: false,
    poll: 1000,
    aggregateTimeout: 300,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    quiet: false,
    noInfo: false,
    clientLogLevel: 'none',
    stats: {
      cached: false,
      cachedAssets: false,
      chunks: false,
      colors: true,
      hash: false,
      version: false,
    },
  };
};
