module.exports = (config) => {
  const reactLiteAlias = {
    'react': 'react-lite',
    'react-dom': 'react-lite'
  };

  config.resolve.alias = Object.assign(
    config.resolve.alias,
    reactLiteAlias
  );

  return config;
};
