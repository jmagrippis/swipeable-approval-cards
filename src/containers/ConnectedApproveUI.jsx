import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StackableCardList from '../components/StackableCardList'
import ApprovalButtons from '../components/ApprovalButtons'
import { assessEmployee } from '../reducers/employees'

class ConnectedApproveUI extends Component {
  render () {
    let { dispatch, employees } = this.props
    let boundActionCreators = bindActionCreators({ assessEmployee }, dispatch)
    return (
      <div>
        <StackableCardList cards={employees.take(3)} {...boundActionCreators} />
        <ApprovalButtons accept={() => { console.log('we accept!') }} reject={() => { console.log('we reject!') }} />
      </div>
    )
  }
}

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
  return {}
}

ConnectedApproveUI.propTypes = {
  employees: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedApproveUI)
