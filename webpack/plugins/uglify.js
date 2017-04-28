const {
  optimize: { UglifyJsPlugin },
} = require('webpack');

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new UglifyJsPlugin({
      sourceMap: false,
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
