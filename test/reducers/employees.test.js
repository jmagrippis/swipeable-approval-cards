import reducer, { defaultState, fetchEmployeesRequest, addEmployees, setOffset,
assessEmployee, fetchEmployeesSuccess, fetchEmployeesFailure } from '../../src/reducers/employees'
import { expect } from 'chai'
import { Map } from 'immutable'

describe('(Redux) employees', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })

    it('sets isFetching to true when requesting', () => {
      const action = fetchEmployeesRequest()
      expect(reducer(defaultState, action).get('isFetching')).to.equal(true)
    })

    it('adds or updates employees in the existing map of employees', () => {
      const employees = Map({
        15: {
          id: 15,
          name: 'Timmy Tester',
          avatar: 'profile15.png',
          rating: 4.2
        },
        27: {
          id: 27,
          name: 'Elena Example',
          avatar: 'profile27.png',
          rating: 4.8
        }
      })
      let action = addEmployees(employees)
      let nextState = reducer(defaultState, action)
      expect(nextState.get('employees')).to.equal(employees)

      const moreEmployees = Map({
        15: {
          id: 15,
          name: 'Timmy Tester',
          avatar: 'profile15b.png',
          rating: 4.1
        },
        40: {
          id: 40,
          name: 'Alex Average',
          avatar: 'profile40.png',
          rating: 2.5
        }
      })

      action = addEmployees(moreEmployees)
      let expected = Map({
        15: {
          id: 15,
          name: 'Timmy Tester',
          avatar: 'profile15b.png',
          rating: 4.1
        },
        27: {
          id: 27,
          name: 'Elena Example',
          avatar: 'profile27.png',
          rating: 4.8
        },
        40: {
          id: 40,
          name: 'Alex Average',
          avatar: 'profile40.png',
          rating: 2.5
        }
      })

      expect(reducer(nextState, action).get('employees').toJS()).to.deep.equal(expected.toJS())
    })

    it('sets the request\'s offset', () => {
      let action = setOffset(10)
      expect(reducer(defaultState, action).get('offset')).to.equal(10)

      action = setOffset(303)
      expect(reducer(defaultState, action).get('offset')).to.equal(303)
    })

    it('changes the assessment of an employee', () => {
      let employees = Map({
        15: Map({
          id: 15,
          name: 'Timmy Tester',
          avatar: 'profile15b.png',
          rating: 4.1
        })
      })
      let state = Map({
        employees,
        offset: 1,
        isFetching: false
      })
      let action = assessEmployee(15, 'approved')
      let expected = Map({
        15: Map({
          id: 15,
          name: 'Timmy Tester',
          avatar: 'profile15b.png',
          rating: 4.1,
          assessment: 'approved'
        })
      })
      expect(reducer(state, action).get('employees')).to.equal(expected)

      action = assessEmployee(15, 'rejected')
      expected = Map({
        15: Map({
          id: 15,
          name: 'Timmy Tester',
          avatar: 'profile15b.png',
          rating: 4.1,
          assessment: 'rejected'
        })
      })
      expect(reducer(state, action).get('employees')).to.equal(expected)
    })

    it('sets isFetching to false after a successful request', () => {
      let state = Map({
        employees: Map(),
        offset: 0,
        isFetching: true
      })
      const action = fetchEmployeesSuccess()
      expect(reducer(state, action).get('isFetching')).to.equal(false)
    })

    it('sets isFetching to false after a failed request', () => {
      let state = Map({
        employees: Map(),
        offset: 0,
        isFetching: true
      })
      const action = fetchEmployeesFailure()
      expect(reducer(state, action).get('isFetching')).to.equal(false)
    })
  })
})
