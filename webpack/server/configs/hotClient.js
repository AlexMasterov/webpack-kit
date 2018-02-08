module.exports = ({ output }) => {
  return {
    https: false,
    logLevel: 'silent',
    noInfo: true,
    path: `${output.publicPath}__webpack_hmr`,
    reload: true,
  };
};
