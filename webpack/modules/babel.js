module.exports = (config) => {
  config.resolve.extensions = [
    ...config.resolve.extensions,
    '.js'
  ];

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.js$/i,
      include: config.context,
      loader: 'babel-loader',
      options: require('./babelPreset.js')(config)
    }
  ];

  return config;
};
