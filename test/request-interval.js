/*global describe, it */
'use strict';

var raf = require('raf');
var assert = require('assert');
var requestInterval = require('request-interval');

// polyfill PhantomJS' raf
window.requestAnimationFrame = raf;
window.cancelAnimationFrame = raf.cancel;

describe('request-interval', function() {
  it('should be executed every 10ms', function(done) {
    this.timeout(70);

    var numCalls = 0;
    var start = Date.now();
    var id = requestInterval(10, function() {
      var delta = Date.now() - start;
      assert(delta >= 10 && delta < 25);
      start = Date.now();
      numCalls++;

      if (numCalls === 4) {
        requestInterval.clear(id);
        done();
      }
    });
  });

  it('should be cleared after first call', function(done) {
    this.timeout(70);

    var numCalls = 0;
    var id = requestInterval(10, function() {
      numCalls++;
      requestInterval.clear(id);
    });

    setTimeout(function() {
      assert(numCalls === 1);
      done();
    }, 50);
  });
});
