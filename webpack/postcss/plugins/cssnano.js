const defaultConfig = {
  autoprefixer: {
    add: false,
    supports: false,
    flexbox: false,
    grid: false,
    remove: false,
  },
  discardComments: {
    removeAll: true,
  },
  mergeIdents: true,
  mergeRules: true,
  minifyFontValues: true,
  normalizeUrl: true,
  reduceIdents: false,
  safe: true,
  sourcemap: false,
  uniqueSelectors: true,
};

module.exports = (config) => {
  return Object.assign({}, defaultConfig, config);
};
