module.exports = (config) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      options: {
        limit: 50000,
        name: 'fonts/[name].[hash:8].[ext]',
      },
    },
  ];

  return config;
};
