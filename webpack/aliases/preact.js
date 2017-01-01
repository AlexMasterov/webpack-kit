module.exports = (config) => {
  const preactAlias = {
    'react': 'preact-compat/dist/preact-compat',
    'react-dom': 'preact-compat/dist/preact-compat'
  };

  config.resolve.alias = Object.assign({},
    config.resolve.alias,
    preactAlias
  );

  return config;
};
