var $ = require('jquery')
var n = 1

function ended () {
  const counter = () => n++

  var div = $('#mocha')
  var hot = $('#hot')
  if (!hot.length) {
    hot = $('<div>', { id: 'hot', style: 'position: fixed; left: 3em; top: 1em' })
  }
  hot.html(`Hot Reload: ${counter()}`)
  hot.prependTo(div)
}

global.mochaEndedCallback = ended
module.exports = ended
