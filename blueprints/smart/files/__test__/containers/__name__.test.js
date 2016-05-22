import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import <%= pascalEntityName %> from '../../src/containers/<%= pascalEntityName %>'

describe('(Container) <%= pascalEntityName %>', () => {
  it('should exist', () => {
    expect(shallow(<<%= pascalEntityName %> />).contains(<div></div>)).to.equal(true)
  })
})
