import swing from 'icemaker-swing'

import Vue from 'vue'
import { vmInit, vmDestroy, isVisible } from '@ui/testing'
import RangeViewer from '@ui/components/range-viewer'

Vue.component('range-viewer', RangeViewer)

describe('range-viewer', () => {
  let vm
  let template = `
    <range-viewer current-name="Dragon">
      <el-tab-pane ref="dragon" name="Dragon"> <p>Dragon</p> </el-tab-pane>
      <el-tab-pane ref="tiger" name="Tiger"> <p>Tiger</p> </el-tab-pane>
      <el-tab-pane ref="snake" name="Snake"> <p>Snake</p> </el-tab-pane>
      <el-tab-pane ref="ox" name="Ox"> <p>Ox</p> </el-tab-pane>
    </range-viewer>
  `

  beforeEach(() => {
  });

  afterEach(() => {
    vmDestroy(vm)
  })

  it('renders its nested children', () => {
    const template = `
      <range-viewer>
        <div> Dragon </div>
      </range-viewer>
    `
    vm = vmInit({ template })
    expect(vm.$el.innerHTML).to.contain('Dragon')
  })

  it('shows headers', (done) => {
    vm = vmInit({ template }, null, true)
    swing(vm.$nextTick(), done, () => {
      expect(vm.$el.querySelector('header').innerText)
        .to.equal('Dragon\nTiger\n\Snake\nOx\n')
    })

  })

  it('acts like an accordion', (done) => {
    vm = vmInit({ template }, null, true)
    swing(vm.$nextTick(), done, () => {
      expect(isVisible(vm.$refs.dragon.$el)).to.be.true
      expect(isVisible(vm.$refs.tiger.$el)).to.be.false
    })
  })
})
