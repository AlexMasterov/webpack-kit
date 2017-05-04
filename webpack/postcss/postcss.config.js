const postcssPlugins = {
  'postcss-autoreset': require('./plugins/autoreset')(),
  'autoprefixer': require('./plugins/autoprefixer')(),
};

module.exports = {
  parser: 'sugarss',
  plugins: postcssPlugins,
};
