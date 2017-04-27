const noParse = [
  /\.min\.js$/i,
  /build/,
  /dist/,
  /output/,
];

module.exports = (config) => {
  config.module.noParse = config.module.noParse || [];

  config.module.noParse = [
    ...config.module.noParse,
    new RegExp(noParse),
  ];

  return config;
};
