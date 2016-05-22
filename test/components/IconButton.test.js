import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import IconButton from '../../src/components/IconButton'

describe('(Component) IconButton', () => {
  it('renders the given icon', () => {
    let iconName = 'check'
    let onClick = () => {}
    let wrapper = shallow(<IconButton iconName={iconName} onClick={onClick} />)
    expect(wrapper.text()).to.equal(iconName)

    iconName = 'close'
    wrapper = shallow(<IconButton iconName={iconName} onClick={onClick} />)
    expect(wrapper.text()).to.equal(iconName)
  })

  it('responds to click events', () => {
    let iconName = 'check'
    const onClick = sinon.spy()
    let wrapper = shallow(<IconButton iconName={iconName} onClick={onClick} />)

    wrapper.simulate('click')
    expect(onClick.calledOnce).to.equal(true)
  })
})
