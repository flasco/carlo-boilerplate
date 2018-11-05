const koa = require('koa');
const koaWebpack = require('koa-webpack');
const cors = require('koa2-cors');
const config = require('../config/webpack.dev');

const app = new koa();

koaWebpack({
  config
}).then((middleware) => {
  app.use(middleware);
});

app.use(cors());

app.listen(8207, () => {
  console.log('app listen at 8207');
});
