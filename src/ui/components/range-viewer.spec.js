import swing from 'icemaker-swing'

import Vue from 'vue'
import { vmInit, vmDestroy, isVisible } from '@ui/testing'
import RangeViewer from '@ui/components/range-viewer'

Vue.component('range-viewer', RangeViewer)

describe('range-viewer', () => {
  let vm

  beforeEach(() => {
  });

  afterEach(() => {
    // vmDestroy(vm)
  })

  it('renders its nested children', () => {
    const template = `
      <range-viewer>
        <div> Dragon </div>
      </range-viewer>
    `
    vm = vmInit({ template })
    expect(vm.$el.children[0].innerHTML.trim()).to.equal('Dragon')
  })

  it('acts like an accordion', (done) => {
    const template = `
      <range-viewer current-name="Dragon">
        <el-tab-pane name="Dragon">
          <p>Dragon</p>
        </el-tab-pane>
        <el-tab-pane name="Tiger">
          <p>Tiger</p>
        </el-tab-pane>
      </range-viewer>
    `

    vm = vmInit({ template }, null, true)
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.querySelector('p').innerHTML).to.equal('Dragon')
      expect(isVisible(vm.$el.children[0])).to.be.true
      expect(isVisible(vm.$el.children[1])).to.be.false
    })
  })
})
