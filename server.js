import koa from 'koa';
import KoaJade from 'koa-jade';

const app = koa();
const jade = new KoaJade({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
});

app.use(jade.middleware);

// x-response-time
app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// response
app.use(function*() {
  this.render('index', {
    content: 'Hello world'
  }, true)
});

app.listen(3000);

console.log('App listening on Port 3000');
