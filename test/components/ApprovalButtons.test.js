import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ApprovalButtons from '../../src/components/ApprovalButtons'

describe('(Component) ApprovalButtons', () => {
  it('renders with two IconButtons', () => {
    let accept = () => {}
    let reject = () => {}
    let wrapper = shallow(<ApprovalButtons accept={accept} reject={reject} />)
    expect(wrapper.find('IconButton').length).to.equal(2)
  })
})
