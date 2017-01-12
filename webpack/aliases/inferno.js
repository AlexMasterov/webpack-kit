module.exports = (config) => {
  config.resolve.alias = Object.assign({},
    config.resolve.alias,
    {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  );

  return config;
};
