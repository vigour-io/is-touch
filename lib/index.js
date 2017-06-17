'use strict'
var isNode = require('is-node')
/**
 * @id isTouch
 * `true` if we're in a touch-enabled context, `false` otherwise
 */
module.exports = isNode
  ? false
  : (('ontouchstart' in global) ||
    global.DocumentTouch &&
    document instanceof global.DocumentTouch) ||
    navigator.msMaxTouchPoints ||
    false
