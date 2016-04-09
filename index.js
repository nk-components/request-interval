'use strict';

exports = module.exports = interval;
function interval(delay, fn) {
  var start = Date.now();
  var data = {};
  data.id = requestAnimationFrame(loop);

  return data;

  function loop() {
    data.id = requestAnimationFrame(loop);

    if (Date.now() - start >= delay) {
      fn();
      start = Date.now();
    }
  }
}


exports.clear = clearInterval;
function clearInterval(data) {
  cancelAnimationFrame(data.id);
}
