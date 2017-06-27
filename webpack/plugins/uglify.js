const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function isSourceMap({ devtool }) {
  return devtool &&
    devtool.indexOf('source-map') >= 0;
}

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new UglifyJSPlugin({
      sourceMap: isSourceMap(config),
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
