module.exports = (config) => {
  config.resolve.alias = Object.assign({},
    config.resolve.alias,
    {
      'react': 'react-lite',
      'react-dom': 'react-lite',
    }
  );

  return config;
};
