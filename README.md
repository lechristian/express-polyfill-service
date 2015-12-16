# Express Polyfill Service
An [express](http://expressjs.com/en/index.html) middleware for [Polyfill Service](https://github.com/Financial-Times/polyfill-service) by Financial-Times

## Installation

```bash
npm install express-polyfill-service --save
```

## Usage

```javascript
var polyfill = require('express-polyfill-service');

app.use('/polyfill.js', polyfill());
```

```html
<script type="application/javascript" src="/polyfill.js"></script>
```

## API

```javascript
app.use('/polyfill.js', polyfill([options]));
```

`options` is a javascript object with the following properties:

These are the default properties passed directly to [getPolyfillString]https://github.com/Financial-Times/polyfill-service#library-api-reference

* `uaString`: String, required. The user agent to evaluate for polyfills that should be included conditionally
* `minify`: Boolean, optional. Whether to minify the bundle
* `features`: Object, optional. An object with the features that are to be considered for polyfill inclusion. If not supplied, no features will be considered and the output will be blank. To load the default feature set, set features to `{default:{}}`.  Each feature must be an entry in the features object with the key corresponding to the name of the feature and the value an object with the following properties:
  * `flags`: Array, optional. Array of flags to apply to this feature (see below)
  * `unknown`: String, optional. What to do when the user agent is not recognised.  Set to `polyfill` to return default polyfill variants of all qualifying features, `ignore` to return nothing.  Defaults to `ignore`.

Flags that may be applied to polyfills are:

* `gated`: Wrap this polyfill in a feature-detect, to avoid overwriting the native implementation
* `always`: Include this polyfill regardless of the user-agent

