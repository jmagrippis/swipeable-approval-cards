import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import StackableCard from '../../src/components/StackableCard'

describe('(Component) StackableCard', function () {
  it('should print out the given name in a h3', function () {
    let avatar = 'test.png'
    let name = 'Timmy Tester'
    let wrapper = shallow(<StackableCard name={name} avatar={avatar} />)
    expect(wrapper.find('h3').text()).to.equal(name)

    name = 'Elena Example'
    wrapper = shallow(<StackableCard name={name} avatar={avatar} />)
    expect(wrapper.find('h3').text()).to.equal(name)
  })
})
