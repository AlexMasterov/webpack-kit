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
        useBuiltIns: false,
        targets: {
          node: 'current',
          browsers: [
            'last 4 versions',
            '> 1%',
            'Firefox ESR',
            'safari >= 7',
            'ie >= 10',
          ],
        },
      }],
      require.resolve('babel-preset-react'),
    ],

    plugins: [
      'syntax-dynamic-import',
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
