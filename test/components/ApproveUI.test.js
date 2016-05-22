import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Map } from 'immutable'

import ApproveUI from '../../src/components/ApproveUI'
import Employee from '../../src/records/Employee'

describe('(Component) ApproveUI', () => {
  it('should render a StackableCardList and the ApproveButtons', () => {
    let employees = Map({ 1: new Employee({ id: 1 }), 2: new Employee({ id: 2 }), 3: new Employee({ id: 3 }) })
    let assess = () => {}
    let wrapper = shallow(<ApproveUI employees={employees} assess={assess} />)
    expect(wrapper.find('StackableCardList').length).to.equal(1)
    expect(wrapper.find('ApprovalButtons').length).to.equal(1)
  })

  it('should render some helpful text when out of employees', () => {
    let employees = Map({})
    let assess = () => {}
    let wrapper = shallow(<ApproveUI employees={employees} assess={assess} />)
    expect(wrapper.find('StackableCardList').length).to.equal(0)
    expect(wrapper.find('ApprovalButtons').length).to.equal(0)
    expect(wrapper.contains(<div>You have assessed all available employees!</div>)).to.equal(true)
  })
})
