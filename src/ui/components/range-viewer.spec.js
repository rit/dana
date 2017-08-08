import swing from 'icemaker-swing'

import Vue from 'vue'
import { vmFor } from '@ui/testing'
import RangeViewer from '@ui/components/range-viewer'

Vue.component('range-viewer', RangeViewer)


describe('range-viewer', () => {
  let vm

  beforeEach(() => {
    let template = `
      <range-viewer>
        <div> bruce </div>
      </range-viewer>
    `
    vm = vmFor({ template }).$mount()
  });

  it('renders its nested children', () => {
    expect(vm.$el.children[0].innerHTML.trim()).to.equal('bruce')
  })
})
