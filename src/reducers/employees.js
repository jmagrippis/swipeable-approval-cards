import { Iterable, Map } from 'immutable'

import Employee from '../records/Employee'

// Constants
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES'
export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST'
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS'
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE'
export const ADD_EMPLOYEES = 'ADD_EMPLOYEES'
export const ASSESS_EMPLOYEE = 'ASSESS_EMPLOYEE'
export const SET_OFFSET = 'SET_OFFSET'

// Action Creators
// NOTE: This can be expanded with more filters for the backend to consider
export const fetchEmployees = (offset = 0, limit = 0) => {
  return (dispatch) => {
    dispatch(fetchEmployeesRequest())
    // TODO: This would actually query our backend possibly with something like
    // fetch('/api/v1/employees?offset=offset&limit=limit&assessed=false')
    return mockFetchEmployees('/api/v1/employees?offset=offset&limit=limit&assessed=false')
      .then(response => {
        if (!response.ok) {
          return dispatch(fetchEmployeesFailure(response.statusText))
        }
        return response.json()
      })
      .then(data => {
        dispatch(fetchEmployeesSuccess())
        dispatch(setOffset(data.nextOffset))
        return dispatch(addEmployees(data.employees))
      })
  }
}

// Mocking the way we get our employees
const mockFetchEmployees = (endpoint) => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      // we imagine the backend would gives us the "next cursor", or the "next offset" we would like to use
      nextOffset: 3,
      // and of course an array of employees according to our query parameters
      employees: {
        15: {
          id: 15,
          name: 'Timmy Tester',
          avatar: 'assets/images/1/avatar.jpg',
          rating: 3.3
        },
        27: {
          id: 27,
          name: 'Elena Example',
          avatar: 'assets/images/2/avatar.jpg',
          rating: 4.2
        },
        40: {
          id: 40,
          name: 'Alex Average',
          avatar: 'assets/images/3/avatar.jpg',
          rating: 2.5
        },
        44: {
          id: 44,
          name: 'Camille Comely',
          avatar: 'assets/images/4/avatar.jpg',
          rating: 3.3
        },
        51: {
          id: 51,
          name: 'Bob Burger',
          avatar: 'assets/images/5/avatar.jpg',
          rating: 4.2
        }
      }
    })
  })
}

export const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST
  }
}

export const fetchEmployeesSuccess = () => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS
  }
}

export const fetchEmployeesFailure = (error) => {
  return {
    type: FETCH_EMPLOYEES_FAILURE,
    error
  }
}

export const addEmployees = (employees) => {
  return {
    type: ADD_EMPLOYEES,
    employees
  }
}

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    offset
  }
}

export const assessEmployee = (id, assessment) => {
  return {
    type: ASSESS_EMPLOYEE,
    id,
    assessment
  }
}

// Reducer
export const defaultState = Map({
  employees: Map(),
  isFetching: false,
  offset: 0
})

export const employee = (state, action) => {
  switch (action.type) {
    case ASSESS_EMPLOYEE:
      if (state.get('id') !== action.id) return state

      return state.set('assessment', action.assessment)
    default:
      return state
  }
}

export const employees = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return state.set('isFetching', true)
    case ADD_EMPLOYEES:
      const data = Iterable.isIterable(action.employees) ? action.employees : Map(action.employees)
      const newEmployees = data.map(employee => new Employee(employee))
      return state.set('employees', state.get('employees').merge(newEmployees))
    case ASSESS_EMPLOYEE:
      let e = state.get('employees').get(String(action.id))
      if (!e) return state

      return state.set('employees', state.get('employees').set(String(action.id), employee(e, action)))
    case SET_OFFSET:
      return state.set('offset', action.offset)
    case FETCH_EMPLOYEES_SUCCESS:
      return state.set('isFetching', false)
    case FETCH_EMPLOYEES_FAILURE:
      // TODO: Do something with the error message.
      return state.set('isFetching', false)
    default:
      return state
  }
}

export default employees
