const urlLoader = {
  loader: 'url-loader',
  options: {
    limit: 10 * 1024,
    name: 'images/[name].[hash:8].[ext]',
  },
};

const svgUrlLoader = {
  loader: 'svg-url-loader',
  options: {
    limit: 10 * 1024,
    noquotes: true,
  },
};

module.exports = (config) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(jpe?g|png|gif)$/,
      include: config.context,
      use: urlLoader,
    },
    {
      test: /\.svg$/,
      include: config.context,
      use: svgUrlLoader,
    },
  ];

  return config;
};
