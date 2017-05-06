const env = {
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.SERVER_PORT || 3000,
};

module.exports = env;
