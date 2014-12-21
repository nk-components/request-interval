# request-interval [![Build Status](https://travis-ci.org/nk-components/request-interval.svg?branch=master)](https://travis-ci.org/nk-components/request-interval)

Like `setInterval()` but using `requestAnimationFrame().`  
You can also find `requestTimeout` component [here](https://github.com/nk-components/request-timeout).

## Installation

With [npm](http://npmjs.org) do:

```bash
$ npm install request-interval --save
```

Install with [component(1)](http://component.io):

```
$ component install nk-components/request-interval
```

## API

```js
var requestInterval = require('request-interval');

var id = requestInterval(300, function() {
  // do something
});

// [...]
// stop
requestInterval.clear(id);
```

## License

MIT

Inspired by [Joe Lambert's Gist](https://gist.github.com/joelambert/1002116#file-requestinterval-js).
