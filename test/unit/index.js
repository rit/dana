import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../src', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)

// set up chai
var chai = require('chai')
var sinonChai = require('sinon-chai')
chai.should()
chai.use(sinonChai)
global.expect = chai.expect

// mocha global is injected by mocha-loader
// mocha.setup({
//   'ui': 'bdd',
//   'reporter': 'spec'
// })
