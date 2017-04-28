const {
  optimize: { UglifyJsPlugin },
} = require('webpack');

module.exports = (config) => {
  const hasSourceMap =
    config.devtool && config.devtool.indexOf('source-map') >= 0;

  config.plugins = [
    ...config.plugins,
    new UglifyJsPlugin({
      sourceMap: hasSourceMap,
      comments: false,
      mangle: true,
      mangle: {
        except: [],
      },
      compress: {
        booleans: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        loops: true,
        pure_getters: true,
        screw_ie8: true,
        sequences: true,
        unsafe: true,
        unsafe_comps: true,
        unused: true,
        warnings: false,
      },
    }),
  ];

  return config;
};
