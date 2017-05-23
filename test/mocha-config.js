var chai = require('chai')
var moxios = require('moxios')
moxios.delay = 0 // The default is too long
var loadJsonFixture = require('./helper/load-json')

global.expect = chai.expect
global.loadJsonFixture = loadJsonFixture
global.moxios = moxios
