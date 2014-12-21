
# request-interval

  Like setInterval() but with requestAnimationFrame().  

  You can also find `requestTimeout` component [here](https://github.com/nk-components/request-timeout).

## Installation

  Install with [component(1)](http://component.io):

    $ component install nk-components/request-interval

## API

    var requestInterval = require('request-interval');

    var id = requestInterval(300, function() {
      // do something
    });

    // [...]
    // stop
    requestInterval.clear(id);

## License

  MIT

  Inspired by [Joe Lambert's Gist](https://gist.github.com/joelambert/1002116#file-requestinterval-js).
