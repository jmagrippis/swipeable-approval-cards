import reducer, { defaultState } from '../../src/reducers/employees'
import { expect } from 'chai'

describe('(Redux) employees', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
  })
})
