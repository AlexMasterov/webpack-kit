const postcssPlugins = {
  'postcss-autoreset': require('./plugins/autoreset')(),
};

module.exports = {
  parser: 'sugarss',
  plugins: postcssPlugins,
};
