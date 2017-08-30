import swing from 'icemaker-swing'

import { vmInit, vmDestroy, isVisible } from '@ui/testing'

import Vue from 'vue'
import sinon from 'sinon'
import Tab from '@ui/components/tab'
import Panel from '@ui/components/panel'


Vue.component('tab', Tab)
Vue.component('panel', Panel)

describe('tab', () => {
  var vm

  afterEach(() => {
    vmDestroy(vm)
  })

  it('generates the navbar', (done) => {
    var template = `
      <tab ref="tab">
        <panel title="Dragon"> <div>Dragon</div> </panel>
        <panel title="Tiger"> <div>Tiger</div> </panel>
        <panel title="Rabbit"> <div>Rabbit</div> </panel>
      </tab>
    `

    vm = vmInit({ template }, {}, true)
    vm.$nextTick(() => {
      var ul = vm.$refs.tab.$refs.navbar
      expect(ul.textContent.trim()).to.equal('Dragon Tiger Rabbit')
      done()
    })
  })
})
