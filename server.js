import koa from 'koa';

let app = koa();

// x-response-time
app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log(`${this.method} ${this.url} - ${ms}`);
});

// response
app.use(function*() {
  this.body = 'Hello World';
});

app.listen(3000);

console.log('App listening on Port 3000');
