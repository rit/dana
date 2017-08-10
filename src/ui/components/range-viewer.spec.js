import swing from 'icemaker-swing'

import Vue from 'vue'
import { vmInit, vmDestroy, isVisible } from '@ui/testing'
import RangeViewer from '@ui/components/range-viewer'

Vue.component('range-viewer', RangeViewer)

describe('range-viewer', () => {
  let vm
  let template = `
    <range-viewer starting-active-label="Dragon" ref="sut">
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

  it('shows range headers', (done) => {
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

  it('shows only the selected range content', (done) => {
    vm = vmInit({ template }, null, true)
    vm.$nextTick(() => {
      var tigerHeader = vm.$el.querySelector('header section:nth-child(2) .label')
      tigerHeader.click()
    })

    swing(vm.$nextTick(), done, () => {
      let tigerVm = vm.$refs.tiger
      expect(tigerVm.$el.innerText).to.equal('Tiger')
      expect(isVisible(tigerVm.$el)).to.be.true

      expect(isVisible(vm.$refs.dragon.$el)).to.be.false
      expect(isVisible(vm.$refs.snake.$el)).to.be.false
      expect(isVisible(vm.$refs.ox.$el)).to.be.false
    })
  })
})
