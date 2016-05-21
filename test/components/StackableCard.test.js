import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import StackableCard from '../../src/components/StackableCard'

describe('(Component) StackableCard', function () {
  it('should print out the given name', function () {
    let avatar = 'test.png'
    let name = 'Timmy Tester'
    expect(shallow(<StackableCard name={name} avatar={avatar} />).contains(<div>Timmy Tester</div>)).to.equal(true)

    name = 'Elena Example'
    expect(shallow(<StackableCard name={name} avatar={avatar} />).contains(<div>Elena Example</div>)).to.equal(true)
  })
})
