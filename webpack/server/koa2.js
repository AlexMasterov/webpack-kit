const Koa = require('koa');
const koaMiddleware = require('./middlewares/koa2');
const { host, port } = require('../env');

const app = new Koa();

// Middlewares
app.use(koaMiddleware);

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(
    'Koa 2 dev server listening on host %s:%d',
    host,
    port
  );
});
