var through = require('through2');
var stream = through(write, end);
var buffer = buffer.toString();

process.stdin.pipe(tr).pipe(process.stdout);

function write (buffer, encoding, next) {
  this.push('I got some data: ' + buffer + '\n');
  next();
}

function end (done) {
  done();
}
