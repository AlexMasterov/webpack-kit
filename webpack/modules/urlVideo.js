module.exports = (config) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(mp4|webm)$/i,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    },
  ];

  return config;
};
