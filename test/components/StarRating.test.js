import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import StarRating from '../../src/components/StarRating'

describe('(Component) StarRating', () => {
  it('should have the same number of stars as its max property', () => {
    let rating = 3
    let max = 5
    let wrapper = shallow(<StarRating rating={rating} max={max} />)
    expect(wrapper.find('i').length).to.equal(max)

    max = 12
    wrapper = shallow(<StarRating rating={rating} max={max} />)
    expect(wrapper.find('i').length).to.equal(max)
  })

  it('should have the same number of full stars as its rating rounded down', () => {
    let rating = 3.2
    let max = 5
    let wrapper = shallow(<StarRating rating={rating} max={max} />)
    let fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star')
    expect(fullStarElements.length).to.equal(3)

    rating = 4.7
    wrapper = shallow(<StarRating rating={rating} max={max} />)
    fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star')
    expect(fullStarElements.length).to.equal(4)
  })

  it('should have a half star if there is more than 0.3 left over', () => {
    let rating = 3.3
    let max = 5
    let wrapper = shallow(<StarRating rating={rating} max={max} />)
    let fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star_half')
    expect(fullStarElements.length).to.equal(1)

    rating = 4.7
    wrapper = shallow(<StarRating rating={rating} max={max} />)
    fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star_half')
    expect(fullStarElements.length).to.equal(1)

    rating = 2.1
    wrapper = shallow(<StarRating rating={rating} max={max} />)
    fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star_half')
    expect(fullStarElements.length).to.equal(0)
  })

  it('should have empty stars to fill out the block until the max number', () => {
    let rating = 3.3
    let max = 5
    let wrapper = shallow(<StarRating rating={rating} max={max} />)
    let fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star_border')
    expect(fullStarElements.length).to.equal(1)

    rating = 4.7
    wrapper = shallow(<StarRating rating={rating} max={max} />)
    fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star_border')
    expect(fullStarElements.length).to.equal(0)

    rating = 2.1
    wrapper = shallow(<StarRating rating={rating} max={max} />)
    fullStarElements = wrapper.find('i').filterWhere(element => element.text() === 'star_border')
    expect(fullStarElements.length).to.equal(3)
  })
})
