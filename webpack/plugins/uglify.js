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
      parallel: true,
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        mangle: {
          keep_classnames: false,
          keep_fnames: false,
        },
        compress: {
          booleans: true,
          comparisons: false,
          dead_code: true,
          drop_console: true,
          drop_debugger: true,
          ecma: 6,
          loops: true,
          pure_getters: true,
          sequences: true,
          unsafe: true,
          unsafe_arrows: true,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_methods: true,
          unsafe_proto: true,
          unused: true,
          warnings: false,
        },
        output: {
          ascii_only: true,
          comments: false,
          ecma: 6,
        },
      },
    }),
  ];

  return config;
};
