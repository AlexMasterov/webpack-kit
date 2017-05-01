const IS_PROD = process.env.NODE_ENV === 'production';

const urlImageLoader = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'images/[name].[hash:8].[ext]',
  },
};

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
  const loaders = [
    urlImageLoader,
  ];

  if (IS_PROD) {
    loaders.concat(imageLoader);
  }

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(jpe?g|png|gif|svg|bmp)$/i,
      include: config.context,
      use: loaders,
    },
  ];

  return config;
};
