'use strict';

var raf = require('raf');
var now = require('time-now');

exports = module.exports = interval;
function interval(delay, fn, ctx) {
  var start = now();
  var data = Object.create(null);
  data.id = raf(loop);

  return data;

  function loop() {
    data.id = raf(loop);

    if ((now() - start) >= delay) {
      fn.call(ctx);
      start = now();
    }
  }
}


exports.clear = clearInterval;
function clearInterval(data) {
  raf.cancel(data.id);
}
