var $ = require('jquery')
var counter = 0

function ended () {
  var div = $('#mocha')
  var hot = $('#hot')
  if (!hot.length) {
    hot = $('<div>', { id: 'hot', style: 'position: fixed; left: 3em; top: 1em' })
  }
  hot.html(`Hot Reload: ${counter}`)
  if (counter++ > 0) {
    hot.prependTo(div)
  }
}

global.mochaEndedCallback = ended
module.exports = ended
