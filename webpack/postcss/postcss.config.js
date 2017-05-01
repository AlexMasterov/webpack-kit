const postcssPlugins = [
  require('./plugins/autoreset')(),
];

module.exports = {
  parser: 'sugarss',
  plugins: postcssPlugins,
};
