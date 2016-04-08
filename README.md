Really Unique ID
----------------

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Generates a unique ID in the form `iiiiiiiiiii-ttttttttt-iiiiiii` using a __random integer__, a __timestamp__ and another __random integer__ (shortened to 7 chars).

The __timestamp__ and __random integer__ are encoded in base36 to keep the ID as small as possible while still using native base conversion.

### Usage

```javascript
var uniqueId = require('really-unique-id')
uniqueId()
// 658gziv02eg-0i7ow06n0-1idzrcv
```
