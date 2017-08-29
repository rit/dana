import swing from 'icemaker-swing'

import { vmInit, isVisible } from '@ui/testing'

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

  it('can hide its content', () => {
    var template = `
      <div>
        <panel ref="dragon" title="Dragon"><p>Dragon</p></panel>
      </div>
    `
    var methods = {
      addPanel: sinon.spy()
    }
    var Parent =  Vue.extend({ template, methods })
    var vm = vmInit(Parent, {}, true)
    var panelVm = vm.$refs.dragon

    expect(isVisible(panelVm.$el)).to.be.false
  })

  it('can show its content', () => {
    var template = `
      <div>
        <panel ref="dragon" title="Dragon" :activePanel="currentPanel"><p>Dragon</p></panel>
      </div>
    `
    var methods = {
      addPanel: sinon.spy()
    }
    var data = () => {
      return {
        'currentPanel': null
      }
    }

    var Parent =  Vue.extend({ template, methods, data })
    var vm = vmInit(Parent, {}, true)
    var panelVm = vm.$refs.dragon

    expect(isVisible(panelVm.$el)).to.be.false

    vm.currentPanel = 'Dragon'
    vm.$nextTick(() => {
      expect(isVisible(panelVm.$el)).to.be.true
    })
  })
})
