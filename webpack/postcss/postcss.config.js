const postcssPlugins = [
  require('./plugins/autoreset')(),
  require('./plugins/cssnano')()
];

module.exports = {
  parser: 'sugarss',
  plugins: postcssPlugins
};
