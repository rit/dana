// set up chai

var chai = require('chai')
var sinonChai = require('sinon-chai')
chai.should()
chai.use(sinonChai)
global.expect = chai.expect
