const Koa = require('koa');
const koaMiddleware = require('./middlewares/koa2');

const ENV = {
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.SERVER_PORT || 3000
};

const app = new Koa();

// Middlewares
app.use(koaMiddleware);

app.listen(ENV.port, ENV.host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(
    'Koa 2 dev server listening on host %s:%d',
    ENV.host,
    ENV.port
  );
});
