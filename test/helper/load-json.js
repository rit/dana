var fs = require('fs')
var path = require('path')

function loadJsonFixture (file) {
  var name = path.join(process.cwd(), 'test/fixtures', file)
  return JSON.parse(fs.readFileSync(name, 'utf8'));
}

module.exports = loadJsonFixture
