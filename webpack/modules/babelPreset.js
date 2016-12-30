const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = (config) => {
  let options = {
    babelrc: false,
    compact: true,
    cacheDirectory: __dirname + '/.babelCache',
    presets: [
      [require.resolve('babel-preset-latest'), { modules: false }],
      require.resolve('babel-preset-react')
    ],
    plugins: [
      // class { handleClick = () => { } }
      require.resolve('babel-plugin-transform-class-properties'),
      // { ...todo, completed: true }
      require.resolve('babel-plugin-transform-object-rest-spread')
    ]
  };

  if (IS_DEV) {
    options.plugins = [
      'react-hot-loader/babel',
      ...options.plugins
    ];
  }

  return options;
};
