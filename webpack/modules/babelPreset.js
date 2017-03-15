const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = (config) => {
  let options = {
    babelrc: false,
    compact: true,
    cacheDirectory: __dirname + '/.babelCache',
    presets: [
      ['env', {
        debug: IS_DEV,
        loose: true,
        modules: false,
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

  if (IS_PROD) {
    options.plugins = [
      'transform-imports',
      'transform-react-constant-elements',
      ['transform-react-remove-prop-types', {
        mode: 'wrap'
      }],
      ...options.plugins
    ];
  }

  return options;
};
