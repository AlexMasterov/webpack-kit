const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    mozjpeg: {
      quality: 65,
      progressive: true,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      speed: 4,
      quality: '65-90',
    },
    gifsicle: {
      interlaced: false,
    },
  },
};

module.exports = (config) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: imageLoader,
      enforce: 'pre',
    },
  ];

  return config;
};
