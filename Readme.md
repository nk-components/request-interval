
# request-interval

  Like setInterval() but with requestAnimationFrame()

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
