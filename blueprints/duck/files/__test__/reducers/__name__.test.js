import reducer, { defaultState } from '../../src/reducers/<%= camelEntityName %>'
import { expect } from 'chai'

describe('(Redux) <%= camelEntityName %>', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
  })
})
