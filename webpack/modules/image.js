const fileLoader = {
  loader: 'file-loader',
};

const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    progressive: true,
    interlaced: false,
    optimizationLevel: 7,
    pngquant: {
      speed: 4,
      quality: '65-90',
    },
  },
};

module.exports = (config) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(jpe?g|png|gif)$/i,
      include: config.context,
      use: [
        fileLoader,
        imageLoader,
      ],
    },
  ];

  return config;
};
