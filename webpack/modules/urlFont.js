const urlFontLoader = {
  loader: 'url-loader',
  options: {
    limit: 50000,
    name: 'fonts/[name].[hash:8].[ext]',
  },
};

module.exports = (config) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: urlFontLoader,
    },
  ];

  return config;
};
