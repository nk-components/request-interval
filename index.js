'use strict';

var now = require('time-now');

exports = module.exports = interval;
function interval(delay, fn, ctx) {
  var start = now();
  var data = Object.create(null);
  data.id = requestAnimationFrame(loop);

  return data;

  function loop() {
    data.id = requestAnimationFrame(loop);

    if ((now() - start) >= delay) {
      fn.call(ctx);
      start = now();
    }
  }
}


exports.clear = clearInterval;
function clearInterval(data) {
  cancelAnimationFrame(data.id);
}
