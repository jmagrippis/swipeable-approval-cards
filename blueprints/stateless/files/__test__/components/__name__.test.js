import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import <%= pascalEntityName %> from '../../src/components/<%= pascalEntityName %>'

describe('(Component) <%= pascalEntityName %>', () => {
  it('should exist', () => {
    expect(shallow(<<%= pascalEntityName %> />).contains(<div></div>)).to.equal(true)
  })
})
