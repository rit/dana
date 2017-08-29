import swing from 'icemaker-swing'

import { vmInit } from '@ui/testing'

import Numeral from '@ui/components/numeral'

describe('numeral', () => {

  it('displays the number as word', () => {
    var vm = vmInit(Numeral, {propsData: { number: 12}})

    expect(vm.$el.innerHTML.trim()).to.equal('twelve')
  })
})
