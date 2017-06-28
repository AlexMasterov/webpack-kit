const {
  optimize: { AggressiveSplittingPlugin },
} = require('webpack');

module.exports = (config) => {
  const KB = 1024;

  config.plugins = [
    ...config.plugins,
    new AggressiveSplittingPlugin({
      minSize: KB * 30,
      maxSize: KB * 50,
    }),
  ];

  config.recordsPath = `${config.output.path}/records.json`;

  return config;
};
