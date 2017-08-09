function ellipsis (text, count) {
  var words = text.substring(0, count).split(' ')
  words.pop()
  var joined = words.join(' ')
  return joined.replace(/\W$/g, '')
}

module.exports = {
  ellipsis
}
