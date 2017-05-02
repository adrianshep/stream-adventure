var through = require('through2');
var stream = through(write, end);

function write (buffer, encoding, next) {
  this.push('I got some data: ' + buffer + '\n');
  next();
}

function end (done) {
  done();
}
