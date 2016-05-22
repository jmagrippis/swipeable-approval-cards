import React, { PropTypes } from 'react'

import StackableCardList from '../components/StackableCardList'
import ApprovalButtons from '../components/ApprovalButtons'

const renderUI = (employees, assess, visibleId) => (
  <div>
    <StackableCardList cards={employees.take(3)} />
    <ApprovalButtons
      accept={() => assess(visibleId, 'approved')}
      reject={() => assess(visibleId, 'rejected')}
    />
  </div>
)

const renderEmpty = () => (
  <div>You have assessed all available employees!</div>
)

const ApproveUI = ({ employees, assess }) => {
  const visibleId = employees.count() > 0 ? employees.first().get('id') : undefined
  return visibleId ? renderUI(employees, assess, visibleId) : renderEmpty()
}

ApproveUI.propTypes = {
  employees: PropTypes.object.isRequired,
  assess: PropTypes.func.isRequired
}

export default ApproveUI
