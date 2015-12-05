import koa from 'koa';
import KoaJade from 'koa-jade';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router';
import routes from './routes';

const app = koa();
const jade = new KoaJade({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false
});

app.use(jade.middleware);

// x-response-time
app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

app.use(function*() {
  match(
    { routes, location: this.request.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        this.response.status = 500;
        this.body = error.message;
      } else if (redirectLocation) {
        this.response.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        this.response.status = 200;
        const content = renderToString(<RoutingContext {...renderProps} />);
        this.render('index', { content: content });
      } else {
        this.response.status = 404;
        this.body = 'Not Found';
      }
    }
  );
});

app.listen(3000);

console.log('App listening on Port 3000');
