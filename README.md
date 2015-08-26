```javascript
var parse = require('commonform-fingerprint-parse')
var assert = require('assert')

var digest = new Array(65).join('a')

assert.deepEqual(
  parse('commonform@1.0.0#' + digest),
  { version: '1.0.0',
    digest: digest })

assert.strictEqual(
  parse('garbage'),
  false)
```
