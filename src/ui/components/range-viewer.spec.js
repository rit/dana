import swing from 'icemaker-swing'

import Vue from 'vue'
import { vmInit, vmDestroy } from '@ui/testing'
import RangeViewer from '@ui/components/range-viewer'

Vue.component('range-viewer', RangeViewer)

describe('range-viewer', () => {
  let vm

  beforeEach(() => {
    let template = `
      <range-viewer>
        <div> Dragon </div>
      </range-viewer>
    `
    vm = vmInit({ template }, true)
  });

  afterEach(() => {
    vmDestroy(vm)
  })

  it('renders its nested children', () => {
    expect(vm.$el.children[0].innerHTML.trim()).to.equal('Dragon')
  })
})
