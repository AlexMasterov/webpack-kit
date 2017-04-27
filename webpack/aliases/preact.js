module.exports = (config) => {
  config.resolve.alias = Object.assign({},
    config.resolve.alias,
    {
      'react': 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat',
    }
  );

  return config;
};
