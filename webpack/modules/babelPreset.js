const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = (config) => {
  let options = {
    babelrc: false,
    compact: true,
    cacheDirectory: __dirname + '/.babelCache',
    presets: [
      ['env', {
        modules: false,
        loose: true,
        exclude: ['transform-regenerator']
      }],
      require.resolve('babel-preset-react')
    ],
    plugins: []
  };

  if (IS_DEV) {
    options.plugins = [
      'react-hot-loader/babel',
      ...options.plugins
    ];
  }

  return options;
};
