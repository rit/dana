import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../src/ui', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src/ui', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)

require('./chai-init')
require('./mocha-ended-callback')
