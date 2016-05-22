import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Map } from 'immutable'

import StackableCardList from '../../src/components/StackableCardList'
import Employee from '../../src/records/Employee'

describe('(Component) StackableCardList', () => {
  it('renders its cards as separate list elements', () => {
    let cards = Map({
      15: new Employee({
        id: 15,
        name: 'Timmy Tester',
        avatar: 'assets/images/1/avatar.jpg',
        rating: 3.3
      }),
      27: new Employee({
        id: 27,
        name: 'Elena Example',
        avatar: 'assets/images/2/avatar.jpg',
        rating: 4.2
      }),
      40: new Employee({
        id: 40,
        name: 'Alex Average',
        avatar: 'assets/images/3/avatar.jpg',
        rating: 2.5
      })
    })
    let wrapper = shallow(<StackableCardList cards={cards} />)
    expect(wrapper.find('li').length).to.equal(3)

    cards = Map({
      15: new Employee({
        id: 15,
        name: 'Timmy Tester',
        avatar: 'assets/images/1/avatar.jpg',
        rating: 3.3
      })
    })
    wrapper = shallow(<StackableCardList cards={cards} />)
    expect(wrapper.find('li').length).to.equal(1)

    cards = Map()
    wrapper = shallow(<StackableCardList cards={cards} />)
    expect(wrapper.find('li').length).to.equal(0)
  })
})
