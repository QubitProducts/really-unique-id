/**
 * For that extra degree of randomness.
 */
var incrementor = 0

module.exports = uniqueId

/**
 * Returns a unique string using a random
 * integer, a timestamp and a fingerprint.
 *
 * @returns {Number} uniqueId
 */
function uniqueId () {
  return [randomInt(), hammerTime(), randomInt().slice(4)].join('-')
}

/**
 * Returns a random 32 bit integer.
 *
 * @returns {Number} random
 */
function randomInt () {
  var maxVal = Math.round(1 * 1e17)
  return format(Math.round(Math.random() * 1e17), maxVal)
}

/**
 * Returns the time in ms since 1970.
 *
 * @returns {Number} hammertime
 */
function hammerTime () {
  /**
   * http://en.wikipedia.org/wiki/List_of_dates_predicted_for_apocalyptic_events
   */
  var doomsDay = new Date()
  doomsDay.setFullYear('2239')
  return format((new Date()).getTime() + (incrementor++ % 10000), doomsDay.getTime())
}

function format (n, maxVal) {
  return pad(n.toString(36), maxVal.toString(36).length)
}

function pad (n, width) {
  return nZeroes(width - String(n).length) + n
  function nZeroes (n) {
    var length = Math.max((n + 1), 1)
    var z = new Array(length)
    return z.join('0')
  }
}
