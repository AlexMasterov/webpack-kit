const noParse = [
  /\.min\.js$/,
  /build/,
  /dist/,
  /output/
];

module.exports = (config) => {
  config.module.noParse = [
    ...config.module.noParse,
    new RegExp(noParse)
  ];

  return config;
};
