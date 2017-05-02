const defaultConfig = {
  autoprefixer: {
    add: true,
    remove: true,
    cascade: false,
  },
  discardComments: {
    discardDuplicates: true,
    discardUnused: false,
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
