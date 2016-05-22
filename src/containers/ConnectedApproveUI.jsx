import { connect } from 'react-redux'

import ApproveUI from '../components/ApproveUI'
import { assessEmployee } from '../reducers/employees'

const mapStateToProps = (state) => {
  let visibility = state.visibilityFilter
  let employees = state.employees.get('employees').filter(employee => {
    switch (visibility) {
      case 'SHOW_NOT_ASSESSED':
        return !employee.get('assessment')
      case 'SHOW_APPROVED':
        return employee.get('assessment') === 'approved'
      case 'SHOW_REJECTED':
        return employee.get('assessment') === 'rejected'
      case 'SHOW_ALL':
      default:
        return true
    }
  })
  return {
    employees
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    assess: (id, assessment) => {
      dispatch(assessEmployee(id, assessment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveUI)
