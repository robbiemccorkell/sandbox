export default function* (next) {
  var start = new Date;

  yield next;
  
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
}
