module.exports = ({ output }) => {
  return {
    log: false,
    path: `${output.publicPath}/__webpack_hmr`,
  };
};
