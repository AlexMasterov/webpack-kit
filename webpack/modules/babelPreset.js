const { isProd, isDev } = require('../env');

module.exports = (config) => {
  const options = {
    babelrc: false,
    compact: true,
    cacheDirectory: `${__dirname}/.babelCache`,

    presets: [
      ['env', {
        loose: true,
        modules: false,
        exclude: ['transform-regenerator'],
      }],
      require.resolve('babel-preset-react'),
    ],

    plugins: [
      // class { handleClick = () => { } }
      'transform-class-properties',
      // { ...todo, completed: true }
      ['transform-object-rest-spread', {
        useBuiltIns: true,
      }],
    ],
  };

  if (isProd) {
    options.plugins = [
      'transform-imports',
      'transform-react-constant-elements',
      ['transform-react-remove-prop-types', {
        mode: 'wrap',
      }],
      ...options.plugins,
    ];
  }

  if (isDev) {
    options.plugins = [
      ...options.plugins,
      'react-hot-loader/babel',
    ];
  }

  return options;
};
