import swing from 'icemaker-swing'

import { vmInit } from '@ui/testing'

import Vue from 'vue'
import Panel from '@ui/components/panel'
import sinon from 'sinon'

Vue.component('panel', Panel)

describe('panel', () => {

  it('displays its children', () => {
    var template = `
      <div>
        <panel><p>Dragon</p></panel>
      </div>
    `
    var vm = vmInit({ template })

    expect(vm.$el.innerText.trim()).to.equal('Dragon')
  })

  it('adds itself to the parent', () => {
    var template = `
      <div>
        <panel><p>Dragon</p></panel>
      </div>
    `
    var methods = {
      addPanel: sinon.spy()
    }
    var Parent =  Vue.extend({ template, methods })
    var vm = vmInit(Parent)

    expect(vm.$el.innerText.trim()).to.equal('Dragon')
    expect(methods.addPanel).to.have.been.called
  })
})
