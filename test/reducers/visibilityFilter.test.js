import reducer, { defaultState, setVisibilityFilter } from '../../src/reducers/visibilityFilter'
import { expect } from 'chai'

describe('(Redux) visibilityFilter', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })

    it('sets its visibility', () => {
      let visibility = 'SHOW_APPROVED'
      let action = setVisibilityFilter(visibility)
      expect(reducer(defaultState, action)).to.equal(visibility)

      visibility = 'SHOW_REJECTED'
      action = setVisibilityFilter(visibility)
      expect(reducer(defaultState, action)).to.equal(visibility)
    })
  })
})
