/* global describe, it, expect */
var uniqueId = require('../really-unique-id')
var forEach = require('amp-each')
var map = require('amp-map')
var unique = require('amp-unique')

describe('uniqueId', function () {
  it('should produce an id in the form xxxxxxxxxxx-xxxxxxxxx-xxxxxxx', function () {
    forEach(generateIds(200), function () {
      expect(uniqueId()).to.match(/[a-z0-9]{11}-[a-z0-9]{9}-[a-z0-9]{7}/i)
    })
  })
  it('should produce ids that are different', function () {
    expect(unique(generateIds(200)).length).to.be(200)
  })
})

function generateIds (n) {
  return map(new Array(n), function () {
    return uniqueId()
  })
}
