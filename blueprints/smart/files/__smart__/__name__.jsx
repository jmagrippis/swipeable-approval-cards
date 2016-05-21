import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DumbComponent from '../components/DumbComponent'
import { actions } from '../reducers/aReducer'

class <%= pascalEntityName %> extends Component {
  render () {
    let { dispatch } = this.props
    let boundActionCreators = bindActionCreators(actions, dispatch)
    return (
      <div>
        <DumbComponent {...boundActionCreators} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

<%= pascalEntityName %>.propTypes = {
  data: PropTypes.isObject
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>)
