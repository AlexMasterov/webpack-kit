module.exports = ({ output }) => {
  return {
    contentBase: output.path,
    publicPath: output.publicPath,
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
