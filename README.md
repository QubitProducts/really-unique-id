Really Unique ID
----------------

Generates a unique ID in the form `iiiiiiiiiii-ttttttttt-fffffff` using a __random integer__, a __timestamp__ and a __fingerprint__.

The __fingerprint__ is an attempt to uniquely identify the user's browser using `navigator.plugins`, `navigator.userAgent` and `document.cookie`. The __timestamp__ and __random integer__ are encoded in base36 to keep the ID as small as possible.

### Usage

```javascript
var uniqueId = require('really-unique-id')
uniqueId()
// 658gziv02eg-0i7ow06n0-1idzrcv
```
