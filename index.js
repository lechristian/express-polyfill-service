var polyfillService = require('polyfill-service');

module.exports = function(options) {
  options = options || {};

  return function _polyfill(req, res, next) {
    var polyfillStringOptions = {
      uaString: req.headers['user-agent']
    }

    if (options.minify) {
      polyfillStringOptions.minify = options.minify;
    }

    if (options.features) {
      polyfillStringOptions.features = options.features;
    }

    if (options.unknown) {
      polyfillStringOptions.unknown = options.unknown;
    }

    polyfillService.getPolyfillString(polyfillStringOptions).then(function(src) {
      res.statusCode = 200;
      res.setHeader('Cache-Control', 'public');
      res.setHeader('Content-Type', 'application/javascript');
      res.end(src);
    });
  };
};

